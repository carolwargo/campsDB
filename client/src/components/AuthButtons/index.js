import React from 'react';
import { Link } from 'react-router-dom';


import Auth from '../../utils/auth';



const UserAuth = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  
  return (
    <main className="bg-black text-white mb-4 py-3 display-flex align-center">
              
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">

    
    
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-secondary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
      
      </div>
    </main>
  );
};

export default UserAuth;

