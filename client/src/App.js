import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Homepage from './views/Homepage/Homepage'
import Profile from './views/Profile/Profile';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import About from './views/About/About';
import Header from './components/Header';
import Footer from './components/Footer';


import Navbar from './components/Navbar/index'
import Blog from './views/Blog/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Navbar />
        <div className="flex-column justify-flex-start min-100-vh">
          
          <Header />
         
            <Routes>
            <Route 
                path="/homepage" 
                element={<Homepage />} 
              />
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route
              path='/about'
              element={<About />}
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/me" 
                element={<Profile />} 
              />
              <Route 
                path="/profiles/:profileId" 
                element={<Profile />} 
              />
                 <Route 
                path="/blog" 
                element={<Blog />} 
              />
            </Routes>
      
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
