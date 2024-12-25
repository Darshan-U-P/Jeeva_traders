// src/pages/CustomerLogin.js
import React, { useState } from 'react';
import './CustomerLogin.css'; // Import the CSS for Customer Login page
import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component
import ParticlesBackground from '../components/ParticlesBackground'; // Import ParticlesBackground component
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation and useNavigate for redirection

function CustomerLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Add your authentication logic here
    // For now, we assume the login is always successful
    if (username === 'darshan' && password === 'password') {
      alert('Login Successful!');
      navigate('/customer-dashboard'); // Redirect to the customer dashboard on successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <Navbar /> {/* Add Navbar */}
      <ParticlesBackground /> {/* Add ParticlesBackground */}
      <div className="login-container">
        <div className="login-box">
          <div className="logo">
            <img src="http://placehold.it/100x100?text=DD" className="img img-responsive img-circle center-block" alt="Logo" />
            <h1 className="logo-caption"><span className="tweak">C</span>ustomer Login</h1>
          </div>
          <div className="controls">
            <form className="login-form" onSubmit={handleLogin}>
              <label htmlFor="customer-email">Username:</label>
              <input
                type="text"
                id="customer-email"
                name="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="customer-password">Password:</label>
              <input
                type="password"
                id="customer-password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="btn btn-default btn-block btn-custom">Login</button>
            </form>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            <div className="sign-up-redirect">
              <p>Don't have an account? <Link to="/customer-signup">Sign Up here</Link></p> {/* Link to Sign Up page */}
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default CustomerLogin;
