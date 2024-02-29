import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="hero-navbar">
      <div className="nav__wrapper">
        <div className="nav__logo">
          <NavLink to="/">
            <strong>Fit</strong>Fusion
          </NavLink>
        </div>
        <div className="links__container">
          <ul>
            <li className="nav-link active">
              <NavLink to="/" className="">
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/about" className="">
                About Us
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contacts" className="">
                Contacts
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/signin" className="start__button">
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
