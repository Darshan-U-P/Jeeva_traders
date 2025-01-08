import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomerLogin from './pages/CustomerLogin';
import PromotingPartnerLogin from './pages/PromotingPartnerLogin';
import PromotingPartnerDashboard from './pages/PromotingPartnerDashboard'; // Import the dashboard page
import SignUp from './pages/SignUp'; // Import the sign-up page
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomerSignUp from './pages/CustomerSignUp'; // Import the CustomerSignUp page
import CustomerDashboard from './pages/CustomerDashboard'; // Import the CustomerDashboard page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/promoting-partner-login" element={<PromotingPartnerLogin />} />
        <Route path="/promoting-partner-dashboard" element={<PromotingPartnerDashboard />} /> {/* Add route */}
        <Route path="/sign-up" element={<SignUp />} /> {/* Add sign-up route */}
        <Route path="/customer-signup" element={<CustomerSignUp />} /> {/* Add Customer SignUp route */}
        <Route path="/customer-dashboard" element={<CustomerDashboard />} /> {/* Add route for CustomerDashboard */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
