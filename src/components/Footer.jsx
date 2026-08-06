// Footer.jsx - Premium Animated Footer with GitHub
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaArrowUp
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Antony-Mwangi/",
      label: "GitHub",
      color: "#ffffff"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/antony-mwangi-524052335/",
      label: "LinkedIn",
      color: "#0a66c2"
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/+254711668298",
      label: "WhatsApp",
      color: "#25d366"
    },
    {
      icon: FaEnvelope,
      href: "mailto:antonymwangiw85@gmail.com",
      label: "Email",
      color: "#ea4335"
    }
  ];

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="footer">
      {/* Animated Background */}
      <div className="footer-bg">
        <div className="footer-glow"></div>
      </div>

      <div className="footer-container">
        {/* Brand Section */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="brand-wrapper">
            <div className="brand-logo">AM</div>
            <h2 className="brand-name">
              <span className="brand-first">Antony</span>
              <span className="brand-dot">.</span>
              <span className="brand-last">dev</span>
            </h2>
          </div>
          <p className="brand-tagline">
            Building clean, interactive & user-friendly web applications
            that solve real-world problems.
          </p>
          <div className="brand-status">
            <span className="status-dot"></span>
            <span className="status-text">Available for work</span>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                viewport={{ once: true }}
              >
                <a href={link.href}>{link.label}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="footer-heading">Contact</h3>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <span className="contact-label">Phone</span>
              <a href="tel:+254711668298">+254 711 668 298</a>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <span className="contact-label">Email</span>
              <a href="mailto:antonymwangiw85@gmail.com">antonymwangiw85@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <div>
              <span className="contact-label">WhatsApp</span>
              <a href="https://wa.me/+254711668298">+254 711 668 298</a>
            </div>
          </div>
        </motion.div>

        {/* Social Section */}
        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="footer-heading">Connect</h3>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  y: -4,
                  color: social.color,
                  boxShadow: `0 0 30px ${social.color}33`
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
                <span className="social-tooltip">{social.label}</span>
              </motion.a>
            ))}
          </div>
          <p className="social-note">Let's connect and collaborate!</p>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {currentYear} <span className="copyright-name">Antony Mwangi</span>
            <span className="copyright-divider">|</span>
            All Rights Reserved
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        className="back-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
}

export default Footer;