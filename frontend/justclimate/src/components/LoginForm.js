// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />

        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
