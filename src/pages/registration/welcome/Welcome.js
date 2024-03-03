import React from 'react';
import './style.css';

import meal from './../../../img/registration/meal.webp';
import discipline from './../../../img/registration/0_1.webp';
import track from './../../../img/registration/track.webp';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <main className="welcome-main">
      <div className="content__wrapper">
        <div className="greeting">
          <h1 className="header__primary">Welcome to The</h1>
          <p className="logo">FitFusion</p>
        </div>
        <div className="content">
          <div className="card">
            <img src={discipline} alt="meal" />
            <p className="card__description">Initiate a healthy lifestyle</p>
          </div>
          <div className="card">
            <img src={meal} alt="meal" />
            <p className="card__description">
              Start watching after what you eat
            </p>
          </div>
          <div className="card">
            <img src={track} alt="meal" />
            <p className="card__description">By using our convenient app!</p>
          </div>
        </div>
        <div className="controllers">
          <Link to="/" className="back">
            Back
          </Link>
          <Link to="/test/signup/details" className="continue">
            Next
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
