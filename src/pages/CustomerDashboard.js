// src/pages/CustomerDashboard.js
import React, { useState, useEffect } from 'react';
import './CustomerDashboard.css'; // Import custom CSS for the dashboard
import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component
import { Link, useNavigate } from 'react-router-dom';

function CustomerDashboard() {
  const [customerInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    mobileNumber: '123-456-7890',
    orderHistory: [
      { id: 1, orderNumber: 'ORD1234', date: '2024-12-01', total: '$120' },
      { id: 2, orderNumber: 'ORD1235', date: '2024-12-10', total: '$250' },
    ],
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to handle logout (clear session, tokens, etc.)
    alert('Logged out successfully!');
    navigate('/customer-login');
  };

  useEffect(() => {
    // Here, you would fetch customer data from the server or use an auth state
    // For now, we are using static data
  }, []);

  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
          <Link to="/customer-profile" className="btn btn-primary">Edit Profile</Link>
          
        </div>
        <h1>Welcome, {customerInfo.name}</h1>
        <div className="dashboard-body">
          <div className="dashboard-section">
            <h2>Account Details</h2>
            <p><strong>Email:</strong> {customerInfo.email}</p>
            <p><strong>Mobile Number:</strong> {customerInfo.mobileNumber}</p>
          </div>

          <div className="dashboard-section">
            <h2>Order History</h2>
            <table className="order-table">
              <thead>
                <tr>
                  <th>Order Number</th>
                  <th>Date</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {customerInfo.orderHistory.map((order) => (
                  <tr key={order.id}>
                    <td>{order.orderNumber}</td>
                    <td>{order.date}</td>
                    <td>{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/customer-profile" className="btn btn-primary">Edit Profile</Link>
          
          </div>

          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomerDashboard;
