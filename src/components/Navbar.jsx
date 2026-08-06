// Navbar.jsx - Premium Navigation Bar (No Theme Toggle)
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

// NavLink Component
const NavLink = ({ href, label, active, onClick, index }) => {
  const linkRef = useRef(null);

  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="nav-item"
    >
      <a
        ref={linkRef}
        href={href}
        className={`nav-link ${active ? "active" : ""}`}
        onClick={onClick}
      >
        <span className="nav-link-text">{label}</span>
        <motion.span
          className="nav-link-underline"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
        {active && (
          <motion.span
            className="nav-link-active-indicator"
            layoutId="activeIndicator"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </a>
    </motion.li>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, links, active, onLinkClick }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40, staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onLinkClick}
          />
          
          {/* Menu Panel */}
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mobile-menu-header">
              <span className="mobile-brand">Antony.dev</span>
            </div>
            
            <ul className="mobile-nav-links">
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  variants={itemVariants}
                  className="mobile-nav-item"
                >
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${active === link.href.replace("#", "") ? "active" : ""}`}
                    onClick={onLinkClick}
                  >
                    <span className="mobile-link-number">0{index + 1}</span>
                    <span className="mobile-link-text">{link.label}</span>
                    <motion.span
                      className="mobile-link-arrow"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Main Navbar Component
function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      // Active section
      const sections = document.querySelectorAll("section[id]");
      let current = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);

      // Scrolled state
      setScrolled(window.scrollY > 50);

      // Scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Back to top button
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="nav-container">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="nav-logo"
            onClick={(e) => handleLinkClick(e, "#hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="logo-container">
              <div className="logo-monogram">AM</div>
              <div className="logo-text">
                <span className="logo-name">Antony</span>
                <span className="logo-dot">.</span>
                <span className="logo-dev">dev</span>
              </div>
            </div>
            <div className="logo-status">
              <span className="status-indicator"></span>
              <span className="status-text">Available</span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={active === link.href.replace("#", "")}
                onClick={(e) => handleLinkClick(e, link.href)}
                index={index}
              />
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="nav-actions">
            {/* Hamburger */}
            <motion.button
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={menuOpen}
        links={navLinks}
        active={active}
        onLinkClick={() => setMenuOpen(false)}
      />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 4l-8 8h6v8h4v-8h6z" fill="currentColor" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;