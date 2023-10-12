import { useEffect, useState } from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({
  name,
  description,
  technologies,
  link,
  github,
  image,
  isExpanded,
  onClick,
}) => {
  const handleCardClick = () => {
    onClick(document.getElementById(name));
  };

  useEffect(() => {
    const card = document.getElementById(name);
    const window = document.getElementById("contentDiv");

    const rect = card.getBoundingClientRect();
    const windowRect = window.getBoundingClientRect();

    // Get the size of the viewport
    const vw = window.clientWidth;
    const vh = windowRect.height;
    // console.log("vw: " + vw);
    // console.log("vh: " + vh);

    const cardWidth = rect.width;
    const cardHeight = rect.height;
    // console.log("cardWidth: " + cardWidth);
    // console.log("cardHeight: " + cardHeight);

    // Get the current position of the card
    const currentX = -rect.left + vw / 2 - cardWidth / 2;
    // const currentY = rect.top - window.scrollTop;
    //go to top of window taking into account scroll position and clientHeight
    const currentY = -rect.top + vh / 2 - cardHeight / 2;

    // console.log("left", rect.left);
    // console.log("top", rect.top);
    // Calculate scaling factors based on card and viewport sizes
    const scaleX = vw / cardWidth / 1.2;
    const scaleY = vh / cardHeight / 1.2;

    // console.log("currentX: " + currentX);
    // console.log("currentY: " + currentY);

    if (isExpanded) {
      // Update the custom properties with the current position
      document.documentElement.style.setProperty(
        "--start-x",
        `calc(${currentX}px + 1em )`
      );
      document.documentElement.style.setProperty(
        "--start-y",
        `calc(${currentY}px + 1em )`
      );
      document.documentElement.style.setProperty("--scale-x", `${scaleX}`);
      document.documentElement.style.setProperty("--scale-y", `${scaleY}`);

      // console.log(currentX, currentY);
      //change z-index of the card to 10
      card.style.zIndex = 10;
      //change all elements with class card to zindex 1
      const cards = document.getElementsByClassName("card");
      for (const cd of cards) {
        if (cd !== card) cd.style.zIndex = 1;
      }

      // window.classList.add("expanded");
    }
    //  else {
    //   window.classList.remove("expanded");
    // }
  }, [isExpanded]);

  return (
    <div className="card-whole">
      <div
        id={name}
        className={`card ${isExpanded ? "expanded" : ""}`}
        onClick={handleCardClick}
      >
        <div className="card-content">
          <div className="card-front">
            {/* Change Here */}
            <img src={image} alt={name}></img>
            {/*  */}
          </div>
          <div className="card-back">
            {/* Change Here */}
            <h1>{name}</h1>
            {/* <hr id="projectLine"></hr> */}

            <div id="detailsDiv">
              <div className="vertical-bar"></div>

              <div id="projectContent">
                <div id="descriptionDiv">
                  <h2>Description</h2>
                  <p>{description}</p>
                </div>
                <div id="techContent">
                  <h2>Technologies Used</h2>
                  <div id="techs">
                    {technologies.map((technology, index) => (
                      <div key={index}>
                        <span>{technology.name}</span>
                        <img src={technology.image} alt={technology.name} />
                      </div>
                    ))}
                  </div>
                </div>
                <div id="links">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Github
                    <hr id="projectLine"></hr>
                  </a>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Site
                    <hr id="projectLine"></hr>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="cardtitle">{name}</div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  // isExpanded: PropTypes.bool.isRequired,
  // clickFunc: PropTypes.func.isRequired,
};

export default Card;
