import React from "react";
import {
  BrowserRouter as Router,
  Route,
 Routes
} from "react-router-dom";


import SignupPage from "./components/SignupForm"

/*const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});*/

function App() {
  return (
   
      <Router>
        <Routes>
          <Route exact path="/signup" component={SignupPage} />
        </Routes>
      </Router>

  );
}

export default App;
