import React from "react";
import logo from "../images/logo.jpg"; // Ensure the path to the logo image is correct

const Header = () => {
  return (
    <header>
      <div className="header-container flex-wrap">
        <img className="main-logo" src={logo} alt="Caliber Locksmith Logo" />
        <div className="contact-info">
          <div className="contact-info-call">
            <p>Call Now!</p>
          </div>
          <div>
            Dc: 202-318-1630 <br />
            Va: 703-935-0140 <br />
            Md: 301-455-0550
          </div>
        </div>
      </div>
      <nav className="nav-bar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Security Sys</a></li>
          <li><a href="#">Safes</a></li>
          <li><a href="#">Garage Door</a></li>
          <li><a href="#">Price List</a></li>
          <li><a href="#">Service Areas</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
