import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import CoverResize from '../../assets/images/CoverResize.png'; 
import './header.css';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


  const headerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CoverResize}) no-repeat center center`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    height: '300px', // Adjust the height to your preference
    display: 'flex',
    alignItems: 'center',
  };
 
  return (
    <header className="bg-black text-white mb-4 py-3 display-flex align-center"
            style={headerStyle}>
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
          <h1 className="m-0" style={{ fontSize: '4rem' }}>
            301_CATCHING
          </h1>
        <h4 style={{ fontFamily: "icon" }}>
                {" "}
                The <span style={{color:"red"}}>
                  {" "}
                  "FOUNDATIONAL EXPERTS"
                </span>{" "}
                for everything catching:
                <br></br>
              
                Providing Players with the skills to master their craft &
                elevate their game.
            
                </h4>
                <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-md btn-light m-2 custom-button" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-md btn-light m-2 custom-button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-md btn-light m-2 custom-button"  to="/login">
                Login
              </Link>
              <Link className="btn btn-md btn-light m-2 custom-button" to="/signup">
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