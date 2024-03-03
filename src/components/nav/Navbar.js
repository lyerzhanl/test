import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

const Navbar = () => {
  const { keycloak } = useKeycloak();

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log('dafigureiweod');
    keycloak.login();
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    keycloak.logout();
  };

  return (
    <nav className="hero-navbar">
      <div className="nav__wrapper">
        <div className="nav__logo">
          <NavLink to="/workout-web-app/">
            <strong>Fit</strong>Fusion
          </NavLink>
        </div>
        <div className="links__container">
          <ul>
            <li className="nav-link active">
              <NavLink to="/test/" className="">
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/test/about" className="">
                About Us
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/test/contacts" className="">
                Contacts
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/test/profile" className="start__button">
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
