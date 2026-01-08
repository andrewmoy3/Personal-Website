import airpool from "./assets/Airpool.png";
import spotlyte from "./assets/spotlyte.png";
import asia from "./assets/asia.jpeg";
import prisma from "./assets/prisma.png";
import python from "./assets/python.png";
import google from "./assets/google.webp";
import baseball from "./assets/swat_baseball.png";
import opencv from "./assets/opencv.png";
import pandas from "./assets/pandas.png";
import bs from "./assets/bs.jpg";
import geothermal from "./assets/geothermal.png";
import pulp from "./assets/pulp.png";
import certara from "./assets/certara.png";
import react from "./assets/react.jpg";
import solar from "./assets/solar.jpg";
import air_poll from "./assets/air_pollution.jpg";
import chest from "./assets/chest.png";

let cards = [];

cards.push({
  name: "Solar Power Generation Shape Analysis",
  description:
    "This project uses unsupervised learning to discover hidden patterns in daily solar power generation shapes across the United States, and then uses supervised learning topredict those patterns using independent weather features. A full pipeline involving data collection, data cleaning, and exploratory data analysis is included as part of the project. Specific techniques include dimensionality reduction (PCA, t-SNE), clustering (k-means, DBSCAN, hierarchical), regression, and classification. \n This project was completed as part of the 'Introduction to Data Analytics' (DSAN 5000) curriculum at Georgetown University. A literature review, full written report, technical walkthrough, code documentation, and GitHub repository can be found at the website below.",
  technologies: [
    {
      name: "Python",
      image: python,
    },
  ],
  image: solar,
  github: "",
});

cards.push({
  name: "Statistical Analysis of Air Pollution Causes",
  description:
    "This project uses probabilistic and statistical methods to analyze a variety of factors that contribute to air pollution. Weather patterns, human activity, city demographics, and seasonal trends are analyzed against three major air pollutants to determine the most correlated factors and predict future pollution levels. Additionally, these factors are examined across ten major U.S. cities to explore the differences in behavior of individual cities and regions. \nThis project was completed as part of the 'Probabilistic Modeling and Statistical Computing' (DSAN 5100) curriculum at Georgetown University. A written report, slide deck, and GitHub repository can be found at the website below.",
  technologies: [
    {
      name: "Python",
      image: python,
    },
  ],
  image: air_poll,
  github: "",
});
cards.push({
  name: "Multi-Label Classification of Chest X-Ray Images",
  description:
    "This project uses deep learning techniques and multi-label classification to detect thoracic diseases from chest X-ray images. The project uses convolutional neural networks and transformers, and primarily uses transfer learning on pretrained models. Custom architectures are designed for proof of concept. The project aims to replicate previous work performed by Wang, Xiaosong, et al. in 2017 ('ChestX-ray8: Hospital-Scale Chest X-Ray Database and Benchmarks on Weakly-Supervised Classification and Localization of Common Thorax Diseases'). \nThis project was completed as part of the 'Neural Networks and Deep Learning' (DSAN 6600) curriculum at Georgetown University. A written report, slide deck, code documentation, and GitHub repository can be found at the website below.",
  technologies: [
    {
      name: "Python",
      image: python,
    },
  ],
  image: chest,
  github: "",
});
cards.push({
  name: "Geoexchange System Optimization",
  description:
    "This project was designed as the senior thesis for Swarthmore College's engineering program. The goal of the project was to optimize Swarthmore's newly built geoexchange system to minimize energy use and cost. It involved the analysis of potential upgrades to building envelope, such as insulation and window replacement, to reduce heat leakages, thereby saving energy. Through the use of Python, integer linear programming, and the PuLP Python package, the most cost effective upgrades were identified and recommended to the school to be constructed. The project was designed in collaboration with the professors, administration, architects, and engineers involved with the 'To Zero By Thirty-Five' project. The project is still in progress, and the code, results, and final presentation will be made available at the end of the Spring 2025 semester.",
  technologies: [
    {
      name: "Python",
      image: python,
    },
    {
      name: "PuLP",
      image: pulp,
    },
  ],
  image: geothermal,
  github: "",
});
cards.push({
  name: "Spray Chart Web Scraper",
  description:
    "This project involves a Python script that scrapes data from the game logs of Division 3 baseball teams to produce spray charts for each individual player. The spray charts are then used to analyze the player's hitting tendencies and can be used to help coaches make decisions about how to position their fielders. This project was inspired by my involvement with the Swarthmore College baseball team; despite a season ending injury during my senior season, I wanted to find a way to contribute to the team without being on the field.",
  technologies: [
    {
      name: "Python",
      image: python,
    },
    {
      name: "BeautifulSoup",
      image: bs,
      width: "25px",
    },
    {
      name: "Pandas",
      image: pandas,
    },
    {
      name: "OpenCV",
      image: opencv,
    },
  ],
  image: baseball,
  github: "https://github.com/andrewmoy3/swat_spray_charts",
});
cards.push({
  name: "Send Explorer",
  description: "",
  technologies: [
    {
      name: "React",
      image: react,
    },
  ],
  image: certara,
  github: "",
});
cards.push({
  name: "SwatWorks Web Games",
  description:
    "This project was created as part of a winter internship for a history professor at St. John's University during the winter of 2022-2023, as part of Swarthmore College's 'SwatWorks' program. A real-time multiplayer web interface was created to implement a set of educational game scripts designed by the professor. The implementation allows the professor to monitor the current status of each player and easily process actions. It was created with vanilla HTML, CSS, and JavaScript, and was my first experience with web development.",
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
  ],
  image: asia,
  link: "https://history-game-dev---swatworks.web.app/",
  github: "https://github.com/andrewmoy3/SwatWorks-Web-Games/tree/main",
});
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
  name: "Airpool",
  description:
    "Airpool is a web app that was created by the Swarthmore College Computer Society to help Swarthmore students find people to carpool with to and from the Philadelphia airport. Its intention was to allow students to reduce the cost of ride-sharing services by splitting the cost with others. ",
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

// put cards you want across first row, across second row, then
// across first row of page 2, second row of page 2, etc.
const horizontalOrder = [0, 1, 2, 3, 5, 4, 6, 7, 8];
// take horizontal order and remap to vertical order
const order = [];
const n = horizontalOrder.length;
const groupSize = 6;
const numFullGroups = Math.floor(n / groupSize);
// Loop through each full group
for (let group = 0; group < numFullGroups; group++) {
  let idx = groupSize * group;
  order.push(cards[horizontalOrder[idx]]);
  order.push(cards[horizontalOrder[idx + 3]]);
  order.push(cards[horizontalOrder[idx + 1]]);
  order.push(cards[horizontalOrder[idx + 4]]);
  order.push(cards[horizontalOrder[idx + 2]]);
  order.push(cards[horizontalOrder[idx + 5]]);
}

// add remaining cards
const remaining = n % groupSize;
if (remaining > 0) {
  let startIdx = numFullGroups * groupSize;
  for (let i = 0; i < remaining; i++) {
    order.push(cards[horizontalOrder[startIdx + i]]);
  }
}

export default order;
