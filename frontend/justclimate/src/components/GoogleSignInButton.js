// GoogleSignInButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignInButton = ({ onSuccess, onFailure }) => {
  const googleClientId = '997048304485-2s4ri7f97ippslli94am9ggqavjpjcc6.apps.googleusercontent.com'; // Replace with your actual Google Client ID

  return (
    <GoogleLogin
      clientId={googleClientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignInButton;
