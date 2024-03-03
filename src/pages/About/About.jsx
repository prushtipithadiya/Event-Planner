import React from 'react';
import Navigation from '../../components/Navigation/Navigation'; // Import your Navigation component
import './About.css'; // Import your CSS file

const About = () => {
  return (
    <div>
      <Navigation /> {/* Include the Navigation component */}
      <div className="about-container">
        <h1 className="about-heading">About Us</h1>
        <div className="team-description">
          <div className="team-photo">
            <img src="https://qph.cf2.quoracdn.net/main-qimg-9edf6111cd89c7e040555b9c2748db96-pjlq" alt="Team" />
            
          </div>
          <div className="about-content">
            <p>
              Welcome to Campus Event Planner, your go-to platform for easy event management at universities
              and colleges. We understand the unique challenges of organizing events in an academic
              setting, and our platform is designed to streamline the entire process.
            </p>
            <p>
            Whether you are a student planning a club gathering, a faculty member organizing a seminar, or
            an administrator coordinating a major university event, Campus Event Planner has got you
            covered.
          </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;