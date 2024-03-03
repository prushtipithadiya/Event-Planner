import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  // ... (other code)

  const handleRegistration = async () => {
    try {
      // ... (existing code)

      // Show success notification
      toast.success('Registration successful!', {
        position: 'top-right',
        autoClose: 3000, // Close the notification after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Handle success (you may redirect the user or show a success message)
      console.log('Registration successful');
    } catch (error) {
      // ... (existing code)

      // Show error notification
      toast.error('Registration failed. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // ... (rest of the component)
};

export default RegistrationForm;