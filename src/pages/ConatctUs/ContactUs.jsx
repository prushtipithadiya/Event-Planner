import React, { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation'; // Adjust the path based on your project structure
import './ContactUs.css'; // Import your CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server
      const response = await fetch('http://localhost:5183/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Add any client-side logic after successful form submission
      } else {
        console.error('Error submitting form');
        // Handle errors, display messages, etc.
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network errors
    }
  };

  return (
    <div>
      <Navigation />
      <div className="contact-us-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Feel free to get in touch with us!</p>
          <div className="team-details">
            <pre id="names">Prushti             Janvi             Pallavi           Jagnesh</pre>
          </div>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Visit us at our office: <br></br>123 Main Street, Cityville, State, 12345</p>
        </div>
        <div className="contact-us-wrapper">
          <form className="contact-us-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer">
        <p>Thank you for visiting!</p>
      </div>
    </div>
  );
};

export default ContactUs;