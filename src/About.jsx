import "./About.css";

const About = () => {
  return (
    <div id="about">
      <h1 id="profile">Profile</h1>
      <hr className="line"></hr>
      <div id="about-content">
        <div id="descrip">
          <h2>About Me</h2>

          <p>
            Hello! My name is Andrew. I was born and raised in New York, and I
            am currently entering my third year at Swarthmore College, where I
            am working towards a double major in Computer Science and
            Engineering.
          </p>
          <p>
            I have always had an interest in how computers work, and I am very
            excited now that I have the opportunity to explore that curiosity.
            This past summer, I have delved into the world of web development, I
            am currently searching for a software engineering internship for the
            Summer of 2024
          </p>
        </div>
        <div className="headshot-container">
          <img src="IMG_2112.JPG" alt="Headshot" />
        </div>
        <div id="details">
          <h2>Details</h2>

          <div className="detail">Age: 20</div>
          <div className="detail">School: Swarthmore College</div>
          <div className="detail">Year: Junior</div>
          <div className="detail">Major: Computer Science and Engineering</div>
        </div>
      </div>
    </div>
  );
};

export default About;
