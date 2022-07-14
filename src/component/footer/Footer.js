import React from "react";
import "./footer.scss";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <ul className="footer-linkgroup">
          <li>Sign In</li>
          <li>Register</li>
          <li>Order Status</li>
        </ul>
        <ul className="footer-linkgroup">
          <li>About Us</li>
          <li>Our Story</li>
          <li>Careers</li>
        </ul>
        <ul className="footer-linkgroup">
          <li>Help</li>
          <li>Contact Us</li>
          <li>Returns</li>
        </ul>
        <ul className="footer-linkgroup">
          <li>Follow Us!</li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </li>
          <li>
            <div className="social-icon">
              <div className="social icon-instagram"></div>
              <div className="social icon-facebook"></div>
              <div className="social icon-twitter"></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer-branding"> 
         <ul className="footer-legal">
             <li>Terms of use</li>
             <li>Privacy Policy</li>
         </ul>
         <p className="footer-copyright">© Company Name Address Ave, City Name, State ZIP</p>
         <div className="footer-logo"></div>

      </div>
    </footer>
  );
};
