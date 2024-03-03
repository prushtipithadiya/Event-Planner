// Home.js

import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation"; 
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="home-container">
        <div className="content">
          <h1>Welcome to Campus Event Planner</h1>
          <p>
            Discover and participate in exciting events happening on your campus.
            Explore a variety of technical and non-technical events that cater to
            your interests.
          </p>
          <p>
            Whether you're passionate about technology or looking for fun and
            engaging non-technical activities, our event planner has something for
            everyone.
          </p>
          <Link to="/EventList">
            <button className="explore-button">See Events</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
