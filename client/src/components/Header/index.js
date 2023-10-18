import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import Cover from '../../assets/images/Cover.png'; 
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const headerStyle = {
    background: `url(${Cover}) no-repeat center center`,
    backgroundSize: 'cover',
    color: 'white',
    marginBottom: '4px',
    padding: '3px',
    display: 'flex',
    alignItems: 'center'
  };
  return (
    <header className="bg-black text-white mb-4 py-3 display-flex align-center"
            style={headerStyle}>
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-light" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            301_Catching
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1rem', fontWeight: '700' }}>
        {" "}
                The <span className="text-danger">
                  {" "}
                  "FOUNDATIONAL EXPERTS"
                </span>{" "}
                for everything catching:
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
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
      </div>
    </header>
  );
};

export default Header;
