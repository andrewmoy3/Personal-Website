import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ name, description, link, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
