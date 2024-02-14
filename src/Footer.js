import React, { useState, useEffect } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  useEffect(() => {
    const submitFeedback = async () => {
      if (email && feedback) {
        try {
          const response = await fetch("http://localhost:3000/form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, feedback }),
          });

          if (!response.ok) {
            throw new Error("Failed to submit feedback");
          }

          console.log("Feedback submitted successfully");
          setEmail("");
          setFeedback("");
        } catch (error) {
          console.error("Error submitting feedback:", error.message);
        }
      }
    };

    submitFeedback();
  }, [email, feedback]);

  return (
    <footer className="footer-container">
      <div className="social-media">
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.instagram.com">Instagram</a>
        <a href="https://www.x.com">X</a>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
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
          {/* Removed onSubmit handler from form */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
