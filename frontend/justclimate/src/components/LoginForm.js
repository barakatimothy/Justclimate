// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call handleLogin with the entered email and password
    handleLogin(email, password);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
