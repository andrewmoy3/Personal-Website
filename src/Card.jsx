import { useState } from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ name, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    const element = document.getElementById(name);
    const rect = element.getBoundingClientRect();

    const window = document.getElementById("contentDiv");
    const windowRect = window.getBoundingClientRect();

    // Get the size of the viewport
    const vw = window.clientWidth;
    const vh = windowRect.height;
    console.log(vw, vh);

    const elementWidth = rect.width;
    const elementHeight = rect.height;
    // Get the current position of the element
    const currentX = -rect.left + vw / 2 - elementWidth / 2;
    // const currentY = rect.top - window.scrollTop;
    //go to top of window taking into account scroll position and clientHeight
    const currentY = -rect.top + vh / 2 - elementHeight / 2;

    console.log(currentX, currentY);
    // Calculate scaling factors based on element and viewport sizes
    const scaleX = vw / elementWidth / 2;
    const scaleY = vh / elementHeight / 2;
    console.log(scaleX, scaleY);

    // Update the custom properties with the current position
    document.documentElement.style.setProperty(
      "--start-x",
      `calc(${currentX}px + 1em )`
    );
    // + ${vw / 2}px
    document.documentElement.style.setProperty(
      "--start-y",
      `calc(${currentY}px + 1em )`
    );
    // + ${vh / 2}px
    document.documentElement.style.setProperty("--scale-x", `${scaleX}`);
    document.documentElement.style.setProperty("--scale-y", `${scaleY}`);

    setIsExpanded(!isExpanded);
  };

  return (
    <div
      id={name}
      className={`card ${isExpanded ? "expanded" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card-content">
        <div className="card-front">
          <img src={image} alt="img"></img>
        </div>
        <div className="card-back">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
