// src/pages/Contact.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component
import './Contact.css'; // Import CSS for styling

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <Navbar /> {/* Add Navbar here */}
      <main className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Write your message here"
          ></textarea>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </main>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
}

export default Contact;
