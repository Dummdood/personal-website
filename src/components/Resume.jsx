import "../styles/resume.css";

export default function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-presentation">
        <h1 className="resume-title"><u>Resume</u></h1>
        <h2 className="resume-subtitle"><u>Skills</u>, <u>experiences</u>,</h2>
        <h2 className="resume-subtitle"> and <u>achievements</u>,</h2>
        <h2 className="resume-subtitle"></h2>
        <h2 className="resume-subtitle">all in one place.</h2>
      </div>
      <div className="resume-box">
        <iframe
          className="resume-file"
          src="CV_Laurier_Gauvin.pdf"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  );
}
