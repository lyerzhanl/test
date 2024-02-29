import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {faListCheck} from "@fortawesome/free-solid-svg-icons";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faSortDown} from "@fortawesome/free-solid-svg-icons";

const MainNavbar = () => {
    const [isDropdownClosed, setIsDropdownClosed] = useState(true);

    const profileStyle = {
        backgroundColor: isDropdownClosed ? 'transparent' : '#171718',
    };

    const listStyle = {
        display: isDropdownClosed ? 'none' : 'block',
        opacity: isDropdownClosed ? '0' : '1',
    };

    const listItemStyles = {
        display: isDropdownClosed ? 'none' : 'block',
        opacity: isDropdownClosed ? '0' : '1',
    };

    const sortDownStyles = {
        transform: isDropdownClosed ? '' : 'rotate(180deg)',
        fontWeight: "900"
    }

    const handleProfileClick = () => {
        setIsDropdownClosed(!isDropdownClosed);
    };

    return (
        <nav className="main-navbar">
            <div className="navbar--wrapper">
        <span>
          <strong>Fit</strong>Fusion
        </span>
                <div className="profile">
                    <div
                        className="profile-details"
                        onClick={handleProfileClick}
                        style={profileStyle}
                    >
                        <div className="user-container"></div>
                        <p className="profile__username">gittarakur</p>
                        <FontAwesomeIcon icon={faSortDown} style={sortDownStyles}/>
                    </div>
                    <div className="profile__dropdown-menu">
                        <ul className="dropdown-list" style={listStyle}>
                            <li className="dropdown-item" style={listItemStyles}>
                                <FontAwesomeIcon icon={faPen}/>
                                <Link to={'/'}>Edit Profile</Link>
                            </li>
                            <li className="dropdown-item" style={listItemStyles}>
                                <FontAwesomeIcon icon={faListCheck}/>
                                <Link to={'/'}>Tasks</Link>
                            </li>
                            <li className="dropdown-item" style={listItemStyles}>
                                <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                                <Link to={'/'}>Log Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;
