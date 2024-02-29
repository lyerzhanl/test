import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import MainNavbar from "../components/nav/MainNavbar";
import Sidebar from "../components/sidebar/Sidebar";

const Render = () => {
  const location = useLocation();
  const excludeFooterPaths = [
    '/signup/welcome',
    '/signup/details',
    '/signup/goals',
    '/signup/bodycount',
    '/signin',
    '/home',
    '/exercises',
    '/meal',
    '/training_programs'
  ];


  return (
      <>
        {!excludeFooterPaths.includes(location.pathname) && <Footer />}
      </>
  );
};

export default Render;
