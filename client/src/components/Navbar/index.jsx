import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo2 from "../../assets/images/Logo2.png";
import Container from 'react-bootstrap/Container';

import "./style.css"

function TabsExample() {
  const navbarStyle = {
    backgroundColor:"white",
    boxShadow: '0 4px 2px -2px light gray' // Adjust the shadow as needed
  };

  return (
    <div style={navbarStyle}>
      <Container >
        <Navbar variant="tabs" defaultactivekey="/home">
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Navbar.Brand href="/">
        <img
          src={Logo2}
          alt="Logo2"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <Nav.Item>
        <NavLink to='/homepage'className="nav-link" activeclassname="active">Homepage</NavLink>
      </Nav.Item>
          <Nav.Item>
            <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
          </Nav.Item>
        
          <Nav.Item>
            <NavLink to="/train" className="nav-link" activeclassname="active">Sessions</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/blog" className="nav-link" activeclassname="active">Blog</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/contact" className="nav-link" activeclassname="active">Contact</NavLink>
          </Nav.Item>
        </Nav>
        
        <Nav className="ml-auto"> {/* Use ml-auto class to move the NavDropdown to the right */}
          <Nav.Item>
            <NavLink to="https://twitter.com/301catching" target="_blank" rel="noopener noreferrer" className="nav-link">
              <FaTwitter size={20} />
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="https://www.instagram.com/301_catching/" target="_blank" rel="noopener noreferrer" className="nav-link">
              <FaInstagram size={20} />
            </NavLink>
          </Nav.Item>
          <NavDropdown className="dropdown" title="SIGNUP/LOGIN" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
    </div>
  );
}

export default TabsExample;
