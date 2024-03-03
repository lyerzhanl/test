import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/test/profile', icon: faChartLine, title: 'Profile' },
    { path: '/test/exercises', icon: faDumbbell, title: 'Exercises' },
    { path: '/test/meal', icon: faBurger, title: 'Meal' },
    {
      path: '/test/training_programs',
      icon: faLightbulb,
      title: 'Training Programs',
    },
  ];
  return (
    <nav className="sidebar">
      <div className="sidebar__upper">
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`upper__item ${
                location.pathname === item.path ? 'active' : ''
              }`}
            >
              <div>
                <Link to={item.path}>
                  <FontAwesomeIcon icon={item.icon} />
                  {item.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__lower">
        <ul>
          <li className="lower__item">
            <div>
              <Link to={'/test/'}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                Log Out
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
