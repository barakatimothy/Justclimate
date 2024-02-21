// UserProfile.js
import React, { useState } from 'react';
import './UserProfile.css';
import GreenIndicator from './GreenIndicator'; // Import the GreenIndicator component

const UserProfile = () => {
  const [userName, setUserName] = useState('John Doe');
  const [userBio, setUserBio] = useState('Passionate about climate justice!');
  const [avatarUrl, setAvatarUrl] = useState('https://example.com/avatar.jpg'); // Sample avatar image URL
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleBioChange = (event) => {
    setUserBio(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatarUrl(event.target.value);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result);
        setShowForm(true); // Show the form after uploading an avatar
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile-container">
   
      <div className="profile-section">
        <div className="avatar-container">
          <img src={avatarUrl} alt="User Avatar" className="avatar" />
          <GreenIndicator showForm={showForm} onClick={() => setShowForm(!showForm)} />
          {showForm && <input type="file" accept="image/*" onChange={handleFileUpload} />}
        </div>
        {showForm && (
          <div className="profile-details">
            <label htmlFor="userName">Username:</label>
            <input type="text" id="userName" value={userName} onChange={handleNameChange} />

            <label htmlFor="userBio">Bio:</label>
            <textarea id="userBio" value={userBio} onChange={handleBioChange} />

            <label htmlFor="avatarUrl">Avatar URL:</label>
            <input type="text" id="avatarUrl" value={avatarUrl} onChange={handleAvatarChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
