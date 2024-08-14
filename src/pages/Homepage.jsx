import "../styles/homepage.css";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import HomeIntro from "../components/HomeIntro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Element, scroller } from "react-scroll";

export default function Homepage() {
  return (
    <div className="homepage-container">
      <Navbar />
      <Element name="Intro">
        <HomeIntro id="Intro" />
      </Element>
      <Element name="Resume">
        <Resume id="Resume" />
      </Element>
      <Element name="Contact">
        <Contact id="Contact" />
      </Element>
    </div>
  );
}
