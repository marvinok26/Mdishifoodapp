import React from 'react';
import './about.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import the Font Awesome icon

const AboutUs = () => {
  return (
    <div className="page-container">
      <h1>About Us Page</h1>
      <p>We are a passionate team dedicated to providing delicious and healthy food options.</p>

      <h1>Our Location</h1>

      <div className="map-container">
        <iframe
          title="Maps"
          src="https://api.maptiler.com/maps/fe7da9bc-0ca3-4ea0-8090-a93c5d514a09/?key=spPhAOyghywnutBw51qW#12.0/-1.3024715/36.7103707"
          width="100%"
          height="700px"
        ></iframe>
        <div className="marker">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
