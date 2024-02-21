// LandingPage.js
import React from 'react';
import GoogleSignInButton from './GoogleSignInButton';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = ({ handleLogin }) => {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success:', response);
    handleLogin();
    navigate('/main');
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failure:', error);
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h1>JustClimate</h1>
        <p>Empowering communities for climate justice.</p>
      </div>
      <div>
        <LoginForm handleLogin={handleLogin} />
      </div>
      <div className="google-login-container">
        <GoogleSignInButton onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} />
      </div>
    </div>
  );
};

export default LandingPage;





