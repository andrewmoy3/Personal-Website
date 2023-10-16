import { useState } from "react";
import Card from "./Card";
import "./Portfolio.css";
import airpool from "./assets/Airpool.png";
import spotlyte from "./assets/spotlyte.png";
import asia from "./assets/asia.jpeg";
import prisma from "./assets/prisma.png";
import google from "./assets/google.webp";

const Portfolio = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const clickFunc = (card) => {
    const contentDiv = document.getElementById("contentDiv");
    if (selectedCard) {
      contentDiv.classList.add("expanded");
      if (selectedCard.name == card.name) {
        setSelectedCard(null);
        contentDiv.classList.remove("expanded");
      }
    } else {
      setSelectedCard(card);
      contentDiv.classList.add("expanded");
    }
  };

  let cards = [];

  cards.push({
    name: "Spotlyte",
    description:
      "Spotlyte is an iOS app that was created to make it easier for college students to host, share, and discover events on campus.  From club meetings to career fairs to private movie nights with friends, Spotlyte centralizes all the events on campus in one place. Spotlyte allows both students and organizations to create events, and will recommend events to you based on your interests and friends.",
    technologies: [
      {
        name: "Figma",
        image:
          "https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png",
      },
      {
        name: "Swift",
        image:
          "https://user-images.githubusercontent.com/25181517/121406389-6267a300-c95e-11eb-8d67-f1e22afe8aea.png",
      },
      {
        name: "Google Cloud",
        image: google,
      },
      {
        name: "Prisma",
        image: prisma,
      },
      {
        name: "Next.js",
        image:
          "https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704",
      },
      {
        name: "JavaScript",
        image:
          "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
      },
    ],
    image: spotlyte,
    link: "https://spotlyteapp.com/",
    github: "https://github.com/zzanehip/Spotlyte",
  });
  cards.push({
    name: "SwatWorks Web Games",
    description:
      "This project was created as part of a winter internship for a history professor at St. John's University during the winter of 2022-2023, as part of Swarthmore College's 'SwatWorks' program. A real-time multiplayer web interface was created to implement a set of educational game scripts designed by the professor. The implementation allows the professor to monitor the current status of each player and easily process actions. It was created with vanilla HTML, CSS, and JavaScript, but is currently being reworked with React and MongoDB.",
    technologies: [
      {
        name: "Firebase",
        image:
          "https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png",
      },
      {
        name: "HTML",
        image:
          "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
      },
      {
        name: "CSS",
        image:
          "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
      },
      {
        name: "JavaScript",
        image:
          "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
      },
      {
        name: "React",
        image:
          "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
      },
      {
        name: "mongoDB",
        image:
          "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",
      },
    ],
    image: asia,
    link: "https://history-game-dev---swatworks.web.app/",
    github: "https://github.com/andrewmoy3/SwatWorks-Web-Games/tree/main",
  });
  cards.push({
    name: "Airpool",
    description:
      "Airpool is a web app that was created by the Swarthmore College Computer Society to help Swarthmore students find people to carpool with to and from the Philadelphia airport. Its intention was to allow students to reduce the cost of ride-sharing services by splitting the cost with others. Its development was postponed by the COVID-19 pandemic, but is currently being reworked with hopes of being available by Christmas 2023.",
    technologies: [
      {
        name: "Next.js",
        image:
          "https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704",
      },
      {
        name: "Docker",
        image:
          "https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png",
      },
      {
        name: "React",
        image:
          "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
      },
    ],
    image: airpool,
    link: "https://airpool.sccs.swarthmore.edu/",
    github: "https://github.com/swat-sccs/airpool-v2",
  });

  return (
    <div id="portfolio">
      <h1 id="portfolioHead">Portfolio</h1>
      <hr className="line"></hr>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index} // Add a unique key prop, such as an ID, if available
            name={card.name}
            description={card.description}
            technologies={card.technologies}
            link={card.link}
            image={card.image}
            github={card.github}
            isExpanded={selectedCard && selectedCard.name === card.name}
            onClick={() => clickFunc(card)}
          />
        ))}
      </div>
      {selectedCard && (
        <div
          className="background-overlay"
          style={{ display: selectedCard ? "block" : "none" }}
        ></div>
      )}
    </div>
  );
};

export default Portfolio;
