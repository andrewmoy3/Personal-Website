import { useState } from "react";
import { Card, PlaceHolderCard } from "./Card";
import "./Portfolio.css";
import cards from "./projects.js";
import PageChanger from "./HelperComponents/PageChanger.jsx";

const Portfolio = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(0);
  const numPages = Math.ceil(cards.length / 6);

  const clickFunc = (card) => {
    // The line below grabs the div that contains all the content
    const contentDiv = document.getElementById("contentDiv");
    const cardElement = document.getElementById(card.name);

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

  const cardDiv = (
    <div className="viewport ">
      <div
        className="cards"
        style={{
          left: `calc(-${selectedGroup * 100}%`,
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={`${selectedGroup}-${index}`}
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
    </div>
  );

  return (
    <div id="portfolio">
      <h1 id="portfolioHead">Projects</h1>
      <hr className="line"></hr>
      <div className="page-controls">
        <div className="mask-left"></div>
        <PageChanger
          PageState={selectedGroup}
          setPageState={setSelectedGroup}
          numPages={numPages}
          up={false}
          className="arrow-div"
        />
        {cardDiv}
        <PageChanger
          PageState={selectedGroup}
          setPageState={setSelectedGroup}
          numPages={numPages}
          selectedGroup={selectedGroup}
          up={true}
          className="arrow-div"
        />
        <div className="mask-right"></div>
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
