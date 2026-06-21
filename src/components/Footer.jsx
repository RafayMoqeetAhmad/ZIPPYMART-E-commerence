import React from 'react';

function Footer({ setView }) {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>ZippyMart</h3>
          <p>Your go-to online store for fast and reliable shopping.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><button onClick={() => window.scrollTo(0, 0)}>Home</button></li>
            <li><button onClick={() => setView('products')}>Products</button></li>
            <li><button onClick={() => setView('about')}>About Us</button></li>
            <li><button onClick={() => setView('privacy')}>Privacy Policy</button></li>
            <li><button onClick={() => setView('contact')}>Contact Us</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: rafay5584@gmail.com</p>
          <p>Phone: +92 303 7176675</p>
          <p>Farizpur Road, Lahore, Pakistan</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rafay-moqeet-ahmad-b256a8364/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/RafayMoqeetAhmad" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ZippyMart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;