import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div id="about-content">
        <div id="descrip">
          <p>
            Hello! My name is Andrew. I was born and raised in New York, and I
            am currently entering my third year at Swarthmore College, where I
            am working towards a double major in Computer Science and
            Engineering.
          </p>
          <p>
            Recently, I have delved into the world of web development, I am
            currently searching for an internship for the Summer of 2024 I am
            excited to improve the breadth of my knowledge.
          </p>
        </div>
        <div className="headshot-container">
          <img src="IMG_2112.JPG" alt="Headshot" />
        </div>
        <div id="Details">
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
