import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { eventList } from '../../utils/EventDatabase';
import Navigation from '../../components/Navigation/Navigation';
import { MdCalendarMonth } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import './EventDetails.css';

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);
  const filteredEvent = eventList.find((eventDetail) => eventDetail.id === numId);

  const [registrationFormData, setRegistrationFormData] = useState({});

  const handleRegisterClick = () => {
    // Submit data to Google Form (replace with your Google Form link)
    const formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfEU2hDEJTP1geIcnH18vPR1hA-rSKF0-6qczhTdb5L9iVE2Q/viewform?usp=sf_link';
    
    // Open the form submission link in a new tab
    window.open(formLink, '_blank');

    // You can also perform additional actions here, such as displaying a confirmation message to the user
  };

  return (
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name: {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">{filteredEvent.date.month}</span>
              <span className="font-weight-med">{filteredEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">{filteredEvent.description}</span>
          </p>

          {/* Display only the "Register" button */}
          <button className="registration-button" onClick={handleRegisterClick}>Register for Event</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
