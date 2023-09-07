// import Router from "./Router";
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default App;
