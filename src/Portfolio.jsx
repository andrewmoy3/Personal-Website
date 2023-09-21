import Card from "./Card";
import "./Portfolio.css";

const Portfolio = () => {
  let cards = [];
  cards.push({
    name: "name1",
    description: "description",
    image: "image",
    link: "https://andrew-moy.com",
  });
  cards.push({
    name: "Spotlyte",
    description: "description",
    image: "src/assets/spotlyte.png",
    link: "https://spotlyteapp.com/",
  });

  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <hr className="line"></hr>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index} // Add a unique key prop, such as an ID, if available
            name={card.name}
            description={card.description}
            link={card.link}
            image={card.image}
          />
        ))}
      </div>{" "}
    </div>
  );
};

export default Portfolio;
