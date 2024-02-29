import React from 'react';
import './style.css';
import Navbar from '../../components/nav/Navbar';
import group from './../../img/about/group2.webp';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="about">
        <div className="about-hero">
          <h1 className="header__primary">
            People of all body types come to us - from fat to skinny.
          </h1>
          <img src={group} alt="group" className="group" />
        </div>

        <div className="about-content">
          <div className="content-wrapper">
            <div className="top">
              <h1 className="header__primary">
                Intelligent marketing automation powered by customer data
              </h1>
              <ul>
                <li>
                  <strong>Activate</strong> your data in real-time to better
                  target, personalize and measure all interactions
                </li>
                <li>
                  <strong>Connect</strong> with customers through a seamless
                  email, SMS, mobile push, and reviews experience
                </li>
                <li>
                  <strong>Guide</strong> your marketing with built-in AI,
                  automation, predictive analytics, and benchmarks
                </li>
                <li>
                  <strong>Grow</strong> your audience, your customer lifetime
                  value, and your total value
                </li>
              </ul>
            </div>
            <div className="bottom">
              <h1 className="header__primary">How it started</h1>
              <div className="start__title">
                <p>
                  In 2012, Klaviyo co-founders Andrew Bialecki and Ed Hallen saw
                  a pattern. Companies had loads of data but couldn’t answer
                  basic questions about their customers, let alone use that data
                  to drive revenue through personalized marketing.
                </p>
                <p>
                  The tech to unite data, analytics, and marketing didn’t exist.
                  So they built it. Today over 130,000 of the world’s most
                  notable brands use Klaviyo’s email and SMS marketing platform.
                </p>
                <p>
                  <b>
                    “Klaviyo provides the tools and playbooks for any creator to
                    have more control, more ownership. It doesn’t matter if you
                    create products, services, or content—or some of each. We
                    believe the best products and creations can and should win.”
                  </b>
                </p>
                <p>
                  <b>—Andrew Bialecki, Klaviyo co-founder</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1708350054">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </main>
    </>
  );
};

export default About;
