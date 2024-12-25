// src/pages/CustomerSignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomerSignUp.css';
import ParticlesBackground from '../components/ParticlesBackground'; // Import ParticlesBackground component

function CustomerSignUp() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const sendOtp = () => {
    // Logic to send OTP to the mobile number (mocked for now)
    alert('OTP sent to mobile number!');
    setOtpSent(true); // Mark OTP as sent
  };

  const verifyOtp = () => {
    // Logic to verify OTP (mocked for now)
    if (otp === '123456') {
      setIsOtpVerified(true);
      alert('OTP Verified!');
    } else {
      alert('Invalid OTP');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isOtpVerified) {
      // Logic to handle registration
      alert('Successfully Registered!');
    } else {
      alert('Please verify OTP first');
    }
  };

  return (
    <div className="signup-page">
      <ParticlesBackground /> {/* Add Particles background */}
      <div className="signup-container">
        <div className="signup-box">
          <h1 className="signup-title">Customer Sign Up</h1>
          <form className="signup-form" onSubmit={handleRegister}>
            <label htmlFor="mobile-number">Mobile Number:</label>
            <input
              type="text"
              id="mobile-number"
              value={mobileNumber}
              onChange={handleMobileChange}
              placeholder="Enter your mobile number"
              required
            />
            <button type="button" className="btn btn-default" onClick={sendOtp}>
              Send OTP
            </button>

            {otpSent && ( // Only show OTP box after OTP is sent
              <>
                <label htmlFor="otp">OTP:</label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={handleOtpChange}
                  placeholder="Enter OTP"
                  required
                />
                <button type="button" className="btn btn-default" onClick={verifyOtp}>
                  Verify OTP
                </button>
              </>
            )}

            {isOtpVerified && (
              <>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </>
            )}
          </form>

          <div className="login-redirect">
            <p>Already have an account? <Link to="/customer-login">Login here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSignUp;
