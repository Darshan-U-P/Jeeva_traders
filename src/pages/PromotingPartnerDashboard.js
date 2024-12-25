// src/pages/PromotingPartnerDashboard.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Footer from '../components/Footer'; // Import the Footer component
import './PromotingPartnerDashboard.css';

function PromotingPartnerDashboard() {
  return (
    <div className="dashboard-page">
      <Navbar /> {/* Include the Navbar component */}
      <section className="dashboard-section">
        <h1>Welcome to Your Dashboard</h1>
        <p>
          As a Promoting Partner, you can manage your business and view your
          performance here. Check your sales, access resources, and more.
        </p>
        <div className="dashboard-stats">
          <div className="stat-item">
            <h3>Sales</h3>
            <p>View your current sales and performance.</p>
          </div>
          <div className="stat-item">
            <h3>Resources</h3>
            <p>Access promotional materials and resources.</p>
          </div>
          <div className="stat-item">
            <h3>Profile</h3>
            <p>Edit your partner profile and preferences.</p>
          </div>
        </div>
      </section>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default PromotingPartnerDashboard;
