import React from "react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { Routes, Route } from "react-router-dom";
import Home from "../../Home";

function Pages() {
  return (
    <div className="pages">
      <div className="page">
        <Routes>
          <Route path="CONTACT" element={<ContactUs />} />
          <Route path="ABOUT" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default Pages;
