import "../styles/footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  let iconSize = 45;

  return (
    <footer className="footer">
      <div className="copyright">
        <p className="copyright-text">&copy; Laurier Gauvin 2024</p>
      </div>
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
    </footer>
  );
}
