import "./Sidebar.scss";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faSuitcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import {
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
} from "./scrollFunctions";

const Sidebar = ({ scrollY }) => {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(document.getElementById("home"));
  const aboutRef = useRef(document.getElementById("about"));
  const projectsRef = useRef(document.getElementById("portfolio"));
  // const contactRef = useRef(document.getElementById("contact"));
  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "about", ref: aboutRef },
      { id: "portfolio", ref: projectsRef },
      // { id: "contact", ref: contactRef },
    ];
    // console.log(scrollY);

    for (var section of sections) {
      // console.log(document.getElementById(section.id));
      const targetPosition =
        document.getElementById(section.id).getBoundingClientRect().top +
        scrollY -
        500;
      if (scrollY >= targetPosition) {
        setActiveSection(section.id);
      }
    }
    // const handleScroll = () => {
    //   const contentDiv = document.getElementById("contentDiv");
    //   const sections = [
    //     { id: "home", ref: homeRef },
    //     { id: "about", ref: aboutRef },
    //     { id: "projects", ref: projectsRef },
    //     { id: "contact", ref: contactRef },
    //   ];

    //   if (contentDiv) {
    //     const contentRect = contentDiv.getBoundingClientRect();
    //     for (const section of sections) {
    //       const { id, ref } = section;
    //       const element = ref.current;
    //       if (element) {
    //         const rect = element.getBoundingClientRect();
    //         if (
    //           rect.top >= contentRect.top &&
    //           rect.bottom <= contentRect.bottom
    //         ) {
    //           if (activeSection !== id) {
    //             setActiveSection(id);
    //           }
    //         }
    //       }
    //     }
    //   }
    // };

    // window.addEventListener("scroll", handleScroll);

    // return () => {
    // window.removeEventListener("scroll", handleScroll);
    // };
  }, [scrollY]);

  return (
    <div id="navbar">
      <nav>
        <NavLink exact={true} activeClassName="active" onClick={scrollToHome}>
          <FontAwesomeIcon
            icon={faHome}
            color={activeSection === "home" ? "#b0d9c8" : "#4d4d4e"}
          />
        </NavLink>
        <NavLink
          activeClassName="active"
          className="about-link"
          onClick={scrollToAbout}
        >
          <FontAwesomeIcon
            icon={faUser}
            color={activeSection === "about" ? "#b0d9c8" : "#4d4d4e"}
          />
        </NavLink>
        <NavLink
          activeClassName="active"
          className="portfolio-link"
          onClick={scrollToProjects}
        >
          <FontAwesomeIcon
            icon={faSuitcase}
            color={activeSection === "portfolio" ? "#b0d9c8" : "#4d4d4e"}
          />
        </NavLink>
        <NavLink
          activeClassName="active"
          className="contact-link"
          onClick={scrollToContact}
        >
          <FontAwesomeIcon
            icon={faCode}
            color={activeSection === "contact" ? "#b0d9c8" : "#4d4d4e"}
          />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/andrewmoy3"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color={activeSection === "contact" ? "#b0d9c8" : "#4d4d4e"}
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/andrewmoy3"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color={activeSection === "contact" ? "#b0d9c8" : "#4d4d4e"}
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
