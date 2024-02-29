import React from 'react';
import './style.css';

import heroBanner from './../../img/hero/1x1.png';

import jawBoneIcon from './../../img/icons/jawbone-removebg-preview.png';
import myfitnesspalIcon from './../../img/icons/myfitnesspal-bg-removebg-preview.png';
import reebokIcon from './../../img/icons/reebok-bg-removebg-preview.png';
import fitBitIcon from './../../img/icons/fit.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faDumbbell,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

import Navbar from '../../components/nav/Navbar';
import Stories from '../../components/stories/Stories';
import {useNavigate} from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();



  const handleEmail = (e) => {
    e.preventDefault();
    navigate('/signup/welcome')
  }
  return (
    <>
      <Navbar />

      <main className="landing-main">
        <section className="hero__section">
          <div className="hero__left">
            <div className="left__content">
              <h1 className="header__primary">
                Perfect your body with our application.
              </h1>
              <p className="description">
                Transform your physique effortlessly with our cutting-edge
                fitness training app. Elevate your workouts, track your
                progress, and conquer your fitness goals with ease. Your journey
                to a stronger, healthier you starts here!
              </p>
              <form>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your E-Mail"
                />
                <button className="start__button submit" onClick={handleEmail}>
                  Get Started
                </button>
              </form>
              <i className="ps">
                Start your adventure and earn an unlimited sub...
              </i>
            </div>
          </div>
          <div className="hero__right">
            <img className="hero__banner" src={heroBanner} alt="" />
          </div>
        </section>

        <section className="flash__cards">
          <div className="row">
            <div className="col-1-of-3">
              <div className="icon__wrapper">
                <FontAwesomeIcon icon={faDumbbell} className="fa-icon" />
              </div>
              <h3 className="header__secondary">Variety</h3>
              <p>
                Free workout training programs from coaches to accelerate your
                development.
              </p>
            </div>
            <div className="col-1-of-3">
              <div className="icon__wrapper">
                <FontAwesomeIcon icon={faGear} className="fa-icon" />
              </div>
              <h3 className="header__secondary">Customization</h3>
              <p>
                Feel free to customize your own training program by choosing
                among 1000 of exercices.
              </p>
            </div>
            <div className="col-1-of-3">
              <div className="icon__wrapper">
                <FontAwesomeIcon icon={faUserShield} className="fa-icon" />
              </div>
              <h3 className="header__secondary">Safety and Efficiency</h3>
              <p>
                Be sure that all collected information will be stored in safe
                place and will not be leaked.
              </p>
            </div>
          </div>
        </section>

        <section className="collabs">
          <div className="collabs__wrapper">
            <img src={fitBitIcon} alt="Fit Bit" />
            <img src={myfitnesspalIcon} alt="My Fitness Pal" />
            <img src={jawBoneIcon} alt="Jaw Bone" />
            <img src={reebokIcon} alt="Reebok" />
          </div>
        </section>

        <Stories />
      </main>
    </>
  );
};

export default LandingPage;
