import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import MainNavbar from '../components/nav/MainNavbar';
import Sidebar from '../components/sidebar/Sidebar';

const Render = () => {
  const location = useLocation();
  const excludeFooterPaths = [
    '/workout-web-app/signup/welcome',
    '/workout-web-app/signup/details',
    '/workout-web-app/signup/goals',
    '/workout-web-app/signup/bodycount',
    '/workout-web-app/signin',
    '/workout-web-app/home',
    '/workout-web-app/exercises',
    '/workout-web-app/meal',
    '/workout-web-app/training_programs',
    '/workout-web-app/profile',
  ];

  return <>{!excludeFooterPaths.includes(location.pathname) && <Footer />}</>;
};

export default Render;
