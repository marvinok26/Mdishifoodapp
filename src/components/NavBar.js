
import React from 'react';
import { Link } from 'react-router-dom';
// import AboutUs from './components/Pages/AboutUs';
// import ContactUs from './components/Pages/ContactUs';

import './NavBar.css'; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">mdishi App</div>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/contact" className="nav-link">Contact Us</Link>

    </nav>
  );
}

export default NavBar;
