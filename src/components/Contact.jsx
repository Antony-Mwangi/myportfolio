

import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-text">
        Feel free to reach out to me directly through any of the channels below.
        I’d be happy to connect with you!
      </p>

      <div className="contact-links">
        {/* Mobile number (tel:) */}
        <a href="tel:+254711668298" className="contact-card">
          📱 Call Me: +254 711668298
        </a>

        {/* Email */}
        <a href="mailto:antonymwangiw85@gmail.com" className="contact-card">
          📧 Email: antonymwangiw85@gmail.com
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/0711668298"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          💬 WhatsApp Chat
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/antony-mwangi-524052335/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          🔗 LinkedIn Profile
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Antony-Mwangi/Antony-Mwangi"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          🖥️ GitHub Projects
        </a>
      </div>
    </section>
  );
}

export default Contact;
