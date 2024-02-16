// Signup.js
import React, { useState } from 'react';

const Signup = ({ history }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    // Validate form data (add more validation as needed)
    if (!formData.username || !formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    // Perform signup logic (connect to backend API, etc.)
    // For simplicity, we'll just log the data to the console
    console.log('Signup Data:', formData);

    // Redirect to the login page after signup
    history.push('/login');
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
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
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
