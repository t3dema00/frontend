import React from 'react';
import axios from 'axios';

const ProfileDropdown = () => {
    const handleDeleteAccount = async () => {
        await axios.delete('http://localhost:5000/api/users/delete');
        alert('Account deleted');
    };

    const handleSignOut = () => {
        alert('Signed out');
    };

    return (
        <div className="dropdown">
            <button>My Groups</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default ProfileDropdown;
