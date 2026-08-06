// Contact.jsx - Simplified Premium Contact Section
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";
import "./Contact.css";

// Contact Card Component
const ContactCard = ({ icon: Icon, title, info, description, href, delay = 0 }) => {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="contact-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="contact-card-icon">
        <Icon />
      </div>
      <div className="contact-card-content">
        <h4 className="contact-card-title">{title}</h4>
        <p className="contact-card-info">{info}</p>
        <span className="contact-card-desc">{description}</span>
      </div>
      <div className="contact-card-arrow">→</div>
    </motion.a>
  );
};

// Main Contact Component
function Contact() {
  const contactMethods = [
    {
      icon: FaPhone,
      title: "Phone",
      info: "+254 711 668 298",
      description: "Available during business hours",
      href: "tel:+254711668298"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      info: "antonymwangiw85@gmail.com",
      description: "I'll respond within 24 hours",
      href: "mailto:antonymwangiw85@gmail.com"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      info: "Chat with me",
      description: "Fastest way to reach me",
      href: "https://wa.me/+254711668298"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      info: "Connect with me",
      description: "Professional network",
      href: "https://www.linkedin.com/in/antony-mwangi-524052335/"
    }
  ];

  return (
    <section className="contact-section" id="contact">
      {/* Background Effects */}
      <div className="contact-bg">
        <div className="gradient-mesh"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="grid-pattern"></div>
        {[...Array(12)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`
          }} />
        ))}
      </div>

      <div className="contact-container">
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="header-badge">
            <span className="header-badge-icon">📬</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="contact-title">
            <span className="gradient-text">Contact Me</span>
          </h2>
          <motion.div
            className="title-underline"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="contact-subtitle">
            Reach out to me directly through any of the channels below.
            I'd be happy to connect with you!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <ContactCard
              key={index}
              icon={method.icon}
              title={method.title}
              info={method.info}
              description={method.description}
              href={method.href}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;