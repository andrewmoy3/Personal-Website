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
            Georgetown University. I graduated from Swarthmore College in May
            2025 with a B.S. in Engineering and a B.A. in Computer Science, and
            expect to graduate from Georgetown in December 2026.
            <br></br>
            <br></br> I have particular interest in machine learning
            applications in the renewable energy field, which many of my recent
            projects have focused on. I am currently looking for internship
            opportunities in New York City as a data scientist, machine learning
            engineer, or artificial intelligence engineer for the summer of
            2026.
          </p>
        </div>
        <div className="headshot-container">
          <img src={headshot} alt="Headshot" />
        </div>
        <div id="details">
          <h2>Details</h2>
          <div id="detailDiv">
            <div className="detail">
              <span className="detail-label">Age:</span>
              <span className="detail-value">22</span>
            </div>
            <div className="detail">
              <span className="detail-label">Home:</span>
              <span className="detail-value">New York</span>
            </div>
            <div className="detail">
              <span className="detail-label">School:</span>
              <span className="detail-value">Georgetown University</span>
            </div>
            <div className="detail">
              <span className="detail-label">Year:</span>
              <span className="detail-value">First Year Master's Student</span>
            </div>
            <div className="detail">
              <span className="detail-label">Major:</span>
              <span className="detail-value">
                Data Science and Analytics (Artificial Intelligence
                Concentration)
              </span>
            </div>
            <div className="detail">
              <span className="detail-label">Expected Graduation:</span>
              <span className="detail-value">December 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
