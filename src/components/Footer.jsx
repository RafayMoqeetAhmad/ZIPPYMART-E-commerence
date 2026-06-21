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
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Home</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setView('products'); }}>Products</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setView('about'); }}>About Us</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setView('privacy'); }}>Privacy Policy</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setView('contact'); }}>Contact Us</a>
            </li>
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