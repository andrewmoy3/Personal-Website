// import Router from "./Router";
// import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Misc from "./Misc";
import { useEffect, useState } from "react";
import Contact from "./Contact";
// import TargetingCursor from "./Cursor";
// import Contact from "./Contact";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Define the function to update the scrollY state
    function handleScroll() {
      setScrollY(document.getElementById("contentDiv").scrollTop);
    }

    // Attach the scroll event listener to the contentDiv
    document
      .getElementById("contentDiv")
      .addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      document
        .getElementById("contentDiv")
        .removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="contentDiv">
        <Sidebar scrollY={scrollY} />
        <Home />
        <About />
        <Portfolio />
        <Misc />
        {/* <TargetingCursor /> */}
      </div>
      {/* <Contact /> */}
      {/* <Outlet /> */}
    </>
  );
};

export default App;
