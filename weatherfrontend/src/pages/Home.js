import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="home_page">
      <Navigation />

      <Link to="/Location">"Location Variable"</Link>
      <h1>Home Page</h1>
      </div>
    </>
  )     
}
export default Home;