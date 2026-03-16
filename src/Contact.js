import React from "react";

function Contact() {
  return (
    <div className="contact-section">

      <div className="container">

        <div className="contact-card">

          <h2>Contact</h2>

          <p className="contact-text">
            Available for freelance consulting, automation projects,
            cloud implementation, and business analytics solutions.
          </p>

          <p className="contact-phone">
            WhatsApp: <strong>+91 93439 68286</strong>
          </p>

          <a
            href="https://wa.me/919343968286"
            className="btn btn-success contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
}

export default Contact;