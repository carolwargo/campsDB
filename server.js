const express = require('express');
const path = require('path');
const routes = require('./routes');
const { authMiddleware } = require('./utils/auth');

const db = require('./config/connection');

//const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



