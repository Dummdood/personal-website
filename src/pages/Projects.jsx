import "../styles/Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className="temp-section">
        <div>Projects Section Coming Soon</div>
        <Link
                className="back-home-button"
                to="/"
              >
                Back to Homepage
              </Link>
      </div>
    </>
  );
}
