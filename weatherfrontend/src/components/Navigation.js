import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navigation_bar">
        <Link to="/" className="navigation_link">Home</Link>
        <Link to="/forecast" className="navigation_link">Forecast</Link>
        <Link to="/aqi" className="navigation_link">AQI</Link>
        <Link to="/weathermap" className="navigation_link">Weather Map</Link>
        <Link to="/settings" className="navigation_link">Settings</Link>
      </nav>
    </>
  )
}

export default Navigation;