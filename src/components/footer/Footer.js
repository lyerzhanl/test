import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer__top">
          <div className="footer__content">
            <div className="col">
              <ul>
                <li>About</li>
                <li>
                  <a href="#">Exercices</a>
                </li>
                <li>
                  <a href="#">For coaches</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Support</li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Offers</li>
                <li>
                  <a href="#">Get FitFusion</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__logo">
            <strong>Fit</strong>Fusion
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="center">
          <div>© 2024 FitFusion, Inc</div>
          <div>
            <a href="#">Terms & Conditions</a>
          </div>
          <div>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
