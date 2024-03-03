import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import MainNavbar from '../components/nav/MainNavbar';
import Sidebar from '../components/sidebar/Sidebar';

const Render = () => {
  const location = useLocation();
  const excludeFooterPaths = [
    '/test/signup/welcome',
    '/test/signup/details',
    '/test/signup/goals',
    '/test/signup/bodycount',
    '/test/signin',
    '/test/home',
    '/test/exercises',
    '/test/meal',
    '/test/training_programs',
    '/test/profile',
  ];

  return <>{!excludeFooterPaths.includes(location.pathname) && <Footer />}</>;
};

export default Render;
