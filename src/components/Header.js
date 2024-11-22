import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <h1>User Profile</h1>
      <div className="profile-menu">
        <button
          className="profile-btn"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          Profile ▼
        </button>
        {isDropdownOpen && <ProfileDropdown />}
      </div>
    </header>
  );
}

export default Header;


/*

//1st version

import React, { useState } from 'react';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <header>
            <h1>Movie App</h1>
            <div onClick={toggleDropdown} className="profile-icon">
                <img src="profile-icon.png" alt="Profile" />
            </div>
            {showDropdown && <ProfileDropdown />}
        </header>
    );
};

export default Header;

*/
