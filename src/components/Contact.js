import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title animate-fadeIn">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info animate-fadeIn delay-1">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-text">
              <h4>Email</h4>
              <a href="mailto:leavodopivec2001@gmail.com">leavodopivec2001@gmail.com</a>
              <br />
              <a href="mailto:prevajanje.lv@gmail.com">prevajanje.lv@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-text">
              <h4>Phone</h4>
              <a href="tel:+38641240340">+386 41 240 340</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-text">
              <h4>Location</h4>
              <p>Ljubljana, Slovenia</p>
            </div>
          </div>
        </div>
        <div className="contact-form animate-fadeIn delay-2">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;