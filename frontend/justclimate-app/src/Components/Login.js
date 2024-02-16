// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    // Validate form data (add more validation as needed)
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    // Perform login logic (connect to backend API, etc.)
    // For simplicity, we'll just log the data to the console
    console.log('Login Data:', formData);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
