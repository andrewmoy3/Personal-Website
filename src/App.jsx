// import Router from "./Router";
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <Sidebar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      {/* <Outlet /> */}
    </>
  );
};

export default App;
