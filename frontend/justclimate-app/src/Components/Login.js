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
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form style={styles.form}>
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
        <button type="button" onClick={handleLogin} style={styles.button}>
          Log In
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
    backgroundColor: '#5f9ea0', // Soft Blue or Turquoise
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
  },
};

export default Login;
