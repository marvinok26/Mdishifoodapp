import React, { useState } from "react";
import "./Footer.css"; // Import CSS file for styling

const Footer = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Feedback:", feedback);
    setEmail("");
    setFeedback("");
  };

  return (
    <footer className="footer-container">
      <div className="social-media">
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.instagram.com">Instagram</a>
        <a href="https://www.x.com">X</a>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
