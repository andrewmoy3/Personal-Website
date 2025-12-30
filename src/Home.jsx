import "./Home.css";
import { scrollToAbout, scrollToProjects } from "./scrollFunctions";

const Home = () => {
  return (
    <div id="home">
      <div id="content">
        <div id="greeting">
          <div id="hello">
            <h2>Hello, I'm </h2>
            <h1>Andrew</h1>
          </div>
          <div id="buttons">
            <button onClick={scrollToAbout}>About Me</button>
            <button onClick={scrollToProjects}>My Projects</button>
            {/* href="https://andrewmoy.georgetown.domains/" */}
          </div>
        </div>
        <div id="intro">
          I'm a data science graduate student at Georgetown University
          specializing in artificial intelligence and machine learning.
        </div>
      </div>
    </div>
  );
};

export default Home;
