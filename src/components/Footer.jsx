import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand / Logo */}
        <div className="footer-brand">
          <h2>MyPortfolio</h2>
          <p> Building clean, interactive & user-friendly web apps.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📱 +254711668298</p>
          <p>📧 antonymwangiw85@gmail.com</p>
          <p>💬 WhatsApp: +254711668298</p>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a  href="https://github.com/Antony-Mwangi/" target="_blank" rel="noopener noreferrer">🐙</a>
            <a href="https://www.linkedin.com/in/antony-mwangi-524052335/" target="_blank" rel="noopener noreferrer">🔗</a>
            <a href="https://wa.me/+254711668298" target="_blank" rel="noopener noreferrer">💬</a>
            <a href="mailto:antonymwangiw85@gmail.com">✉️</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Antony Mwangi | All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
