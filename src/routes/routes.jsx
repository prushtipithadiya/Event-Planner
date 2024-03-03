import Home from "../pages/Home/Home";
import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetail from "../pages/EventDetails/EventDetails";
import ContactUs from "../pages/ConatctUs/ContactUs";
import About from "../pages/About/About";
import Registration from "../pages/Registration/Registration"; // Import the Registration component
import NotificationExample from "../components/NotificationExample/NotificationExample";

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/EventList', element: <EventList /> },
  { path: '/find-events', element: <FilterEvents /> },
  { path: '/events/:id', element: <EventDetail /> },
  { path: '/contact-us', element: <ContactUs /> },
  { path: '/about', element: <About /> },
  { path: '/event-registration', element: <Registration /> }, // Add the Registration route
  { path: '/notification', element: <NotificationExample /> },
];
