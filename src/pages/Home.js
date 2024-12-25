// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import './Home.css'; // Make sure styles are correctly applied
import Footer from '../components/Footer'; // Import the Footer component

function Home() {
  return (
    <div className="home-page">
      <Navbar /> {/* Include the Navbar component */}
      <section className="welcome-section">
        <h1>Welcome to Jeeva Traders</h1>
        <p>Your trusted partner in business solutions.</p>
        <p>Explore our services, products, and more.</p>
      </section>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
}

export default Home;
