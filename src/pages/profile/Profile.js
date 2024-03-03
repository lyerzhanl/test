import React, { useState } from 'react';
import './style.css';
import General from '../../components/profile/General';
import ChangePassword from '../../components/profile/ChangePassword';
import Info from '../../components/profile/Info';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('General');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderProfileContent = () => {
    switch (activeTab) {
      case 'General':
        return <General />;
      case 'Change Password':
        return <ChangePassword />;
      case 'Info':
        return <Info />;
      default:
        return <General />;
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="side-links">
        <ul>
          <li
            className={
              activeTab === 'General' ? 'side-link active' : 'side-link'
            }
            onClick={() => handleTabClick('General')}
          >
            General
          </li>
          <li
            className={
              activeTab === 'Change Password' ? 'side-link active' : 'side-link'
            }
            onClick={() => handleTabClick('Change Password')}
          >
            Change Password
          </li>
          <li
            className={activeTab === 'Info' ? 'side-link active' : 'side-link'}
            onClick={() => handleTabClick('Info')}
          >
            Info
          </li>
        </ul>
      </div>
      <div className="profile-content">{renderProfileContent()}</div>
    </div>
  );
};

export default Profile;
