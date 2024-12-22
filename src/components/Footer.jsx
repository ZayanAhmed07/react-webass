// Footer.js
import React from "react";

const Footer = () => {
  const infoLinks = ["Home", "Services", "Security Sys", "Safes", "Garage Door", "Price List", "Contact Us"];
  const serviceAreas = ["Rockville", "Rockville Pike", "Bethesda", "Silver Spring", "Montgomery County", "Howard County", "Greenbelt"];
  const socialLinks = ["facebook.png", "twitter.png", "wifi.png", "youtube.png", "v.png", "dot.png"];

  return (
    <footer>
      <div className="footer-content">
        <div className="info-links">
          <h3>Information Links</h3>
          <ul>
            {infoLinks.map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="service-areas">
          <h3>Service Areas</h3>
          <ul>
            {serviceAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            <img src="./images/location.png" alt="Location Icon" /> Address
          </p>
          <p>
            <img src="./images/mail.png" alt="Email Icon" /> info@caliberlocksmith.com
          </p>
          <p>
            <img src="./images/call.png" alt="Phone Icon" /> 866 887 5610
          </p>
        </div>
        <div className="social-links">
          <h3>Be Social</h3>
          <ul>
            {socialLinks.map((icon, index) => (
              <li key={index}><a href="#"><img src={`./images/${icon}`} alt="Social Icon" /></a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="copyright-section">
        <p>&copy; Copyright CaliberLocksmith.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
