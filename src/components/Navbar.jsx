import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import "../styles/footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  let iconSize = 45;

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 200,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -110,
    });
  };
  return (
    <header className="site-header">
      <nav className="site-navbar">
        <Link
          to="/"
          className="logo-clicker"
          onClick={() => scrollToSection("Intro")}
        >
          <img id="logo" src="initials.png" alt="Logo" />
        </Link>
        <div id="options">
          <ul className="site-nav-links">
            <li>
              <Link
                className="site-nav-link"
                to="/"
                onClick={() => scrollToSection("Intro")}
              >
                Intro
              </Link>
            </li>
            <li>
              <Link
                className="site-nav-link"
                to="/"
                onClick={() => scrollToSection("Resume")}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                className="site-nav-link"
                to="/"
                onClick={() => scrollToSection("Contact")}
                preventScrollReset={true}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="site-nav-link"
                to="/projects"
                preventScrollReset={true}
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className="socials-links">
            <a
              href="https://github.com/Dummdood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={iconSize} />
            </a>
            <a
              href="https://www.linkedin.com/in/laurier-gauvin-b5a834187/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={iconSize} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
