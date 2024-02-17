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
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      <form style={styles.form}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignup} style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '100%',
    marginBottom: '15px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#008080',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
  },
};

export default Signup;
