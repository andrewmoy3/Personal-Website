import "./About.css";
import headshot from "./assets/IMG_2112.png";

const About = () => {
  return (
    <div id="about">
      <h1 id="profile">Profile</h1>
      <hr className="line"></hr>
      <div id="about-content">
        <div id="descrip">
          <h2>About Me</h2>
          <p>
            Hello! My name is Andrew. I am a college student who enjoys
            problem-solving, playing baseball, and learning as much as I can
            about the world.
            <br></br>This past summer, I performed a Software Engineering
            Internship with Certara, and I am eager to further my professional
            career in an engineering or software related role. I also hope to
            pursue a graduate degree in computer science, data science, or
            operations research, and plan on matriculating this upcoming Fall
            2025.
          </p>
        </div>
        <div className="headshot-container">
          <img src={headshot} alt="Headshot" />
        </div>
        <div id="details">
          <h2>Details</h2>
          <div id="detailDiv">
            <div className="detail">Age: 21</div>
            <div className="detail">Home: New York</div>
            <div className="detail">School: Swarthmore College</div>
            <div className="detail">Year: Senior</div>
            <div className="detail">
              Major: Computer Science and Engineering
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
