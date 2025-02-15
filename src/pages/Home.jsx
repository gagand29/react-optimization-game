import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the React Optimization Game</h1>
      <p className="home-subtitle">
        Learn how React optimizations work with interactive examples.
      </p>
      <Link to="/level1" className="home-button">
        Start Level 1
      </Link>
      <Link to="/level2" className="home-button">Start Level 2</Link>
      <Link to="/level3" className="home-button">Start Level 3</Link>
    </div>
  );
}
