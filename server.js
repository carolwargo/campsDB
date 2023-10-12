const express = require('express');
const routes = require('./routes');
const { authMiddleware } = require('./utils/auth');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


// Add the auth middleware here
app.use(cors());
app.use((req, res, next) => authMiddleware({ req, res, next }));


// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}



// Start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
