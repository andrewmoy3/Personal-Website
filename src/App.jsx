// import Router from "./Router";
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
// import Contact from "./Contact";

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <div id="contentDiv">
=======
      <div id="content">
>>>>>>> 45096b169b2b38610b4dc8ef30073d780ef67513
        <Sidebar />
        <Home />
        <About />
        <Portfolio />
      </div>
      {/* <Contact /> */}
      {/* <Outlet /> */}
    </>
  );
};

export default App;
