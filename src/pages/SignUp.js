// src/pages/SignUp.js
import React, { useState } from 'react';
import './SignUp.css'; // Your styles for the sign-up page
import ParticlesBackground from '../components/ParticlesBackground';

function SignUp() {
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleMobileNoChange = (e) => setMobileNo(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleOtpChange = (e) => setOtp(e.target.value);

  const sendOtp = () => {
    // Logic to send OTP (this can be an API call)
    console.log('Sending OTP to', mobileNo);
    setOtpSent(true);
  };

  const verifyOtp = () => {
    // Logic to verify OTP (this can be an API call)
    console.log('Verifying OTP:', otp);
    if (otp === '123456') {  // Example OTP
      setOtpVerified(true);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpVerified) {
      // Logic to register the user (e.g., API call)
      console.log('User registered with', { mobileNo, password });
      alert('Registration Successful');
    } else {
      alert('Please verify OTP before registering');
    }
  };

  return (
    <div className="sign-up-page1">
        <ParticlesBackground /> {/* Add Particles background */}
        <div className="sign-up-page">
            <h2>Promoting Partner Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="mobileNo">Mobile No:</label>
                    <input
                        type="text"
                        id="mobileNo"
                        value={mobileNo}
                        onChange={handleMobileNoChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>

                {otpSent ? (
                    <div className="form-group">
                        <label htmlFor="otp">Enter OTP:</label>
                        <input
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={handleOtpChange}
                            required
                        />
                        <button type="button" onClick={verifyOtp}>Verify OTP</button>
                    </div>
                ) : (
                    <button type="button" onClick={sendOtp}>Send OTP</button>
                )}

                {otpVerified && <button type="submit">Register</button>}
            </form>
        </div>
    </div>
  );
}

export default SignUp;
