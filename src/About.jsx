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
            Hello! My name is Andrew. I am a first year graduate student at
            Georgetown University pursuing a Master's degree in Data Science and
            Analytics with a concentration in Artificial Intelligence. I
            graduated from Swarthmore College in May 2025 with a B.S. in
            Engineering and a B.A. in Computer Science.
            <br></br>
            My expected graduation date from Georgetown is in December 2026. I
            am currently looking for internship opportunities as a data
            scientist, machine learning engineer, or artificial intelligence
            engineer for the summer of 2026.
          </p>
        </div>
        <div className="headshot-container">
          <img src={headshot} alt="Headshot" />
        </div>
        <div id="details">
          <h2>Details</h2>
          <div id="detailDiv">
            <div className="detail">Age: 22</div>
            <div className="detail">Home: New York</div>
            <div className="detail">School: Georgetown University</div>
            <div className="detail">Year: First Year Graduate Student</div>
            <div className="detail">
              Major: Data Science and Analytics (Artificial Intelligence
              Concentration)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
