import { useState } from "react";
import Card from "./Card";
import "./Portfolio.css";

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
    name: "name1",
    description: "description",
    technologies: [],
    image: "image",
    link: "https://andrew-moy.com",
    github: "https://github.com/andrewmoy3/SwatWorks-Web-Games/tree/main",
  });
  cards.push({
    name: "Spotlyte",
    description: "description",
    technologies: ["Full-Stack Web Development"],
    image: "src/assets/spotlyte.png",
    link: "https://spotlyteapp.com/",
    github: "https://github.com/andrewmoy3/SwatWorks-Web-Games/tree/main",
  });
  cards.push({
    name: "SwatWorks Web Games",
    description: "description",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase", "Git"],
    image: "none",
    link: "https://spotlyteapp.com/",
    github: "https://github.com/andrewmoy3/SwatWorks-Web-Games/tree/main",
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
