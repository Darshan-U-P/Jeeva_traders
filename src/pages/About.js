// src/pages/About.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Footer from '../components/Footer'; // Import the Footer component
import './About.css';

function About() {
  return (
    <div className="about-page">
      <Navbar /> {/* Include the Navbar component here */}
      <section className="about-section">
        <h1>About Jeeva Traders</h1>
        <p>
          Jeeva Traders is a leading provider of business solutions, committed
          to delivering quality products and services to our clients. We have
          been in the industry for over 10 years, helping businesses grow with
          innovative products and dedicated customer service.
        </p>
        <p>
          Our team of experts works tirelessly to meet the needs of our
          customers, providing personalized solutions that drive success. We
          offer a wide range of products and services, from consulting to
          product development, with a focus on quality and efficiency.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses by providing them with the
          tools and resources they need to thrive in an ever-changing market.
          We aim to build long-lasting relationships with our clients, based on
          trust, integrity, and excellence.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision becoming the go-to partner for businesses seeking
          innovative solutions, top-notch service, and products that enhance
          their growth and success.
        </p>
      </section>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
}

export default About;
