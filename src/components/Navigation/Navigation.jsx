import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/find-events">Find Events</Link>
        </li>
        <li>
          <Link to="/about">About</Link> {/* Corrected path */}
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link> {/* Corrected path */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
