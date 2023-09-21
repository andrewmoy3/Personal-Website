// import Router from "./Router";
// import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
// import TargetingCursor from "./Cursor";
// import Contact from "./Contact";

const App = () => {
  return (
    <>
      <div id="contentDiv">
        <Sidebar />
        <Home />
        <About />
        <Portfolio />
        {/* <TargetingCursor /> */}
      </div>
      {/* <Contact /> */}
      {/* <Outlet /> */}
    </>
  );
};

export default App;
