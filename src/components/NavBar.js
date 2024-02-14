import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

const Home = () => <div>Home Page</div>;
const AboutUs = () => <div>About Us Page</div>;
const ContactUs = () => <div>Contact Us Page</div>;

const NavBar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">Mdishi</div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
