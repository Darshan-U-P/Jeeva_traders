import React, { useState } from 'react';
import './PromotingPartnerLogin.css';
import ParticlesBackground from '../components/ParticlesBackground';
import { Link, useNavigate } from 'react-router-dom';

function PromotingPartnerLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login check
    if (username === 'darshan' && password === 'password') {
      navigate('/promoting-partner-dashboard');
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className="login-page">
      <ParticlesBackground />
      <div className="login-container">
        <div className="login-box">
          <div className="logo">
            <img src="http://placehold.it/100x100?text=PP" className="img img-responsive img-circle center-block" alt="Logo" />
            <h1 className="logo-caption"><span className="tweak">P</span>romoting Partner Login</h1>
          </div>
          <div className="controls">
            <form className="login-form" onSubmit={handleLogin}>
              <label htmlFor="partner-username">Username:</label>
              <input
                type="text"
                id="partner-username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="partner-password">Password:</label>
              <input
                type="password"
                id="partner-password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-default btn-block btn-custom">Login</button>
            </form>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            <p> Don't have an account?  <Link to="/sign-up" className="btn btn-default btn-block btn-custom">Sign Up</Link></p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotingPartnerLogin;
