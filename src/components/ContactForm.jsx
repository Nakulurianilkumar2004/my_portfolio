import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './ContactForm.css';

function ContactForm() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-info">
        <h3>Connect with Me:</h3>
        <ul className="social-links">
          <li>
            <a href="https://github.com/Nakulurianilkumar2004" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nakuluri-anilkumar-a46139292" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>

        <h3>Contact Information:</h3>
        <ul className="contact-details">
          <li>
            <a href="mailto:nakulurianilkumar66@gmail.com" title="Email">
              <FaEnvelope size={20} /> nakulurianilkumar66@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+919392832240" title="Phone">
              <FaPhone size={20} /> +91 93928 32240
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactForm;

