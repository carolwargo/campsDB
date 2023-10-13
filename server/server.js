const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');//define typeDefs and resolvers
const db = require('./config/connection.js'); //import db connection from connection.js

// READ .env file
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 3001; // Set the port, use 3001 if PORT is not defined in .env
const app = express(); // Create a new instance of Express application
// Create a new instance of ApolloServer with the provided type definitions and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Parse incoming requests as JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files if in production (for client-side)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Serve the main HTML file when a GET request is made to the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
  
});

// Start Apollo Server
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  // Once the Apollo server is ready, open the database connection
  db.once('open', () => {
    // Start the Express server
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
