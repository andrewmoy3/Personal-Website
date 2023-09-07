import "./Home.css";
import { scrollToAbout, scrollToProjects } from "./scrollFunctions";

const Home = () => {
  return (
    <div id="home">
      <div id="content">
        <div id="greeting">
          <h1>Hi,</h1>
          <h1>My name is Andrew</h1>
          <div id="buttons">
            <button onClick={scrollToAbout}>About Me</button>
            <button onClick={scrollToProjects}>My Projects</button>
          </div>
        </div>
        <div id="intro">
          I'm a computer science and engineering student, <br></br>a student
          athlete,<br></br>and an aspiring software engineer.
        </div>
      </div>
    </div>
  );
};

export default Home;
