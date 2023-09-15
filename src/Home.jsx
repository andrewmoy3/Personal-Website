import "./Home.css";
import { scrollToAbout, scrollToProjects } from "./scrollFunctions";

const Home = () => {
  return (
    <div id="home">
      <div id="content">
        <div id="greeting">
          <div id="hello">
            <h1>Hi,</h1>
            <h1>I'm Andrew</h1>
          </div>
          <div id="buttons">
            <button onClick={scrollToAbout}>About Me</button>
            <button onClick={scrollToProjects}>My Projects</button>
          </div>
        </div>
        {/* <div id="intro">
          I'm a computer science and engineering student, <br></br>a student
          athlete,<br></br>and an aspiring software engineer.
        </div>
        <div id="intro">
          I'm a student athlete at Swarthmore college <br></br>
          and an aspiring software engineer.
        </div> */}
        <div id="intro">
          I'm a computer science and engineering student, <br></br>an aspiring
          software engineer, and a student athlete.
        </div>
      </div>
    </div>
  );
};

export default Home;
