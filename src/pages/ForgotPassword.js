// src/pages/ForgotPassword.js
import React from 'react';
import './ForgotPassword.css'; // Import the CSS for Forgot Password page
import Footer from '../components/Footer'; // Import Footer component

function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <div className="forgot-password-box">
          <h1>Forgot Password</h1>
          <form className="forgot-password-form">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <button type="submit" className="btn btn-default btn-block btn-custom">Reset Password</button>
          </form>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default ForgotPassword;
