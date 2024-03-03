import React from 'react';
import MainNavbar from '../components/nav/MainNavbar';
import Sidebar from '../components/sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

const RenderContent = () => {
  const location = useLocation();

  const mainPages = [
    '/workout-web-app/profile',
    '/workout-web-app/exercises',
    '/workout-web-app/meal',
    '/workout-web-app/training_programs',
  ];
  return (
    <>
      {mainPages.includes(location.pathname) && (
        <>
          <MainNavbar />
          <Sidebar />
        </>
      )}
    </>
  );
};

export default RenderContent;
