import "../styles/HomeIntro.css";

export default function HomeIntro() {
  return (
    <section className="home-intro">
      <div className="image-and-intro">
        <div className="intro-paragraph">
          <h1 className="greeting">Hi there, I'm Laurier!</h1>
          <p className="intro-text">
            I'm an aspiring engineer that's passionate about programming,
            computer hardware, biomedical innovation, and much much more!
            <br />
            <br />
            Currently, I'm studying Electrical Engineering and Computer
            Science at McGill University. <br />
            <br />
            Outside of class, I serve as co-president of Effective Altruism McGill, a group
            focused on educating the student body on topics relating to global
            poverty, animal welfare, existential risk, and beyond.
          </p>
        </div>
        <div className="personal-image-box">
          <img
            className="personal-image"
            src="personal-photo.png"
            alt="Example Image"
          />
        </div>
      </div>
    </section>
  );
}
