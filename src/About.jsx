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
            Hello! My name is Andrew. I am a college student who enjoys
            problem-solving, working in a team, and learning as much as I can
            about the world. I love baseball and playing music. I have always
            had a particular curiosity into how computers worked, which has led
            me to study computer science.
          </p>
          <p>
            This past summer, I have delved into full-stack web development, but
            am eager to learn more about any field in the world of computer
            science. I am currently searching for a software engineering
            internship for the Summer of 2024.
          </p>
        </div>
        <div className="headshot-container">
          <img src="IMG_2112.JPG" alt="Headshot" />
        </div>
        <div id="details">
          <h2>Details</h2>
          <div id="detailDiv">
            <div className="detail">Age: 20</div>
            <div className="detail">Home: New York</div>
            <div className="detail">School: Swarthmore College</div>
            <div className="detail">Year: Junior</div>
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
