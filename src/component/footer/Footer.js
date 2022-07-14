import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <ul className="footer-linkgroup">
          <li>Sign In</li>
          <li><Link to="/">Register</Link></li>
          <li><Link to="/">Order Status</Link></li>
        </ul>
        <ul className="footer-linkgroup">
          <li>About Us</li>
          <li><Link to="/">Our Story</Link></li>
          <li><Link to="/">Careers</Link></li>
        </ul>
        <ul className="footer-linkgroup">
          <li>Help</li>
          <li><Link to="/">Contact Us</Link></li>
          <li><Link to="/">Returns</Link></li>
        </ul>
        <ul className="footer-linkgroup">
          <li>Follow Us!</li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </li>
          <li>
            <div className="social-icon">
              <Link to="/"><div className="social icon-instagram"></div></Link>
              <Link to="/"><div className="social icon-facebook"></div></Link>
              <Link to="/"><div className="social icon-twitter"></div></Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer-branding"> 
         <ul className="footer-legal">
             <li><Link to="/">Terms of use</Link> </li>
             <li><Link to="/">Privacy Policy</Link></li>
         </ul>
         <p className="footer-copyright">© Company Name Address Ave, City Name, State ZIP</p>
         <div className="footer-logo"></div>

      </div>
    </footer>
  );
};
