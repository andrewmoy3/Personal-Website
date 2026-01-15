import { images } from "./assets/logos";

let cards = [];

cards.push({
  name: "Solar Power Generation Shape Analysis",
  description:
    "\tThis project uses unsupervised learning to discover hidden patterns in daily solar power generation shapes across the United States, and then uses supervised learning to predict those patterns using independent weather features. A full pipeline involving data collection, data cleaning, and exploratory data analysis is included as part of the project. Specific techniques include dimensionality reduction (PCA, t-SNE), clustering (k-means, DBSCAN, hierarchical), regression, and classification. \n\tThis project was completed as part of the 'Introduction to Data Analytics' (DSAN 5000) curriculum at Georgetown University. A literature review, full written report, technical walkthrough, code documentation, and GitHub repository can be found at the website below.",
  technologies: [
    {
      name: "Python",
      image: images.python,
    },
  ],
  image: images.solar,
  github: "https://github.com/andrewmoy3/DSAN_5000_final_project",
  link: "https://andrewmoy.georgetown.domains/dsan5000/final_project/",
});

cards.push({
  name: "Statistical Analysis of Air Pollution Causes",
  description:
    "\tThis project uses probabilistic and statistical methods to analyze a variety of factors that contribute to air pollution. Weather patterns, human activity, city demographics, and seasonal trends are analyzed against three major air pollutants to determine the most correlated factors and predict future pollution levels. Additionally, these factors are examined across ten major U.S. cities to explore the differences in behavior of individual cities and regions. \n\tThis project was completed as part of the 'Probabilistic Modeling and Statistical Computing' (DSAN 5100) curriculum at Georgetown University. A written report, slide deck, and GitHub repository can be found at the website below.",
  technologies: [
    {
      name: "Python",
      image: images.python,
    },
  ],
  image: images.airPoll,
  github: "https://github.com/andrewmoy3/DSAN_5100_final_project",
  link: "https://andrewmoy.georgetown.domains/dsan5100/final_project/",
});
cards.push({
  name: "Multi-Label Classification of Chest X-Ray Images",
  description:
    "\tThis project uses deep learning techniques and multi-label classification to detect thoracic diseases from chest X-ray images. The project uses convolutional neural networks and transformers, and primarily uses transfer learning on pretrained models. Custom architectures are designed for proof of concept. The project aims to replicate previous work performed by Wang, Xiaosong, et al. in 2017 ('ChestX-ray8: Hospital-Scale Chest X-Ray Database and Benchmarks on Weakly-Supervised Classification and Localization of Common Thorax Diseases'). \n\tThis project was completed as part of the 'Neural Networks and Deep Learning' (DSAN 6600) curriculum at Georgetown University. A written report, slide deck, code documentation, and GitHub repository can be found at the website below.",
  technologies: [
    {
      name: "Python",
      image: images.python,
    },
  ],
  image: images.chest,
  github: "https://github.com/andrewmoy3/DSAN_6600_final_project",
  link: "https://andrewmoy.georgetown.domains/dsan6600/final_project/",
});
cards.push({
  name: "Geoexchange System Optimization",
  description:
    "\tThis project was designed as the senior thesis for Swarthmore College's engineering program. Swarthmore's newly built geoexchange system involved many building envelope upgrades intended to reduce heat leakages and thereby reduce energy use. This project aims to minimize energy use and cost by identifying Through the use of Python, integer linear programming, and the PuLP Python package, the most cost effective upgrades were identified and recommended to the school to be constructed. The project was designed in collaboration with the professors, administration, architects, and engineers involved with the 'To Zero By Thirty-Five' project. The project is still in progress, and the code, results, and final presentation will be made available at the end of the Spring 2025 semester.",
  technologies: [
    {
      name: "Python",
      image: images.python,
    },
    {
      name: "PuLP",
      image: images.pulp,
    },
  ],
  image: images.geothermal,
  github: "",
});
cards.push({
  name: "Spray Chart Web Scraper",
  description:
    "\tThis project involves a Python script that scrapes data from the game logs of Division 3 baseball teams to produce spray charts for each individual player. The spray charts are then used to analyze the player's hitting tendencies and can be used to help coaches make decisions about how to position their fielders. This project was inspired by my involvement with the Swarthmore College baseball team; despite a season ending injury during my senior season, I wanted to find a way to contribute to the team without being on the field.",
  technologies: [
    {
      name: "Python",
      image: images.python,
    },
    {
      name: "BeautifulSoup",
      image: images.bs,
      width: "25px",
    },
    {
      name: "Pandas",
      image: images.pandas,
    },
    {
      name: "OpenCV",
      image: images.opencv,
    },
  ],
  image: images.baseball,
  github: "https://github.com/andrewmoy3/swat_spray_charts",
});
cards.push({
  name: "Send Explorer",
  description: "",
  technologies: [
    {
      name: "React",
      image: images.react,
    },
  ],
  image: images.certara,
  github: "",
});
cards.push({
  name: "SwatWorks Web Games",
  description:
    "\tThis project was created as part of a winter internship for a history professor at St. John's University during the winter of 2022-2023, as part of Swarthmore College's 'SwatWorks' program. A real-time multiplayer web interface was created to implement a set of educational game scripts designed by the professor. The implementation allows the professor to monitor the current status of each player and easily process actions. It was created with vanilla HTML, CSS, and JavaScript, and was my first experience with web development.",
  technologies: [
    {
      name: "Firebase",
      image: images.firebase,
    },
    {
      name: "HTML",
      image: images.html,
    },
    {
      name: "CSS",
      image: images.css,
    },
    {
      name: "JavaScript",
      image: images.js,
    },
  ],
  image: images.asia,
  link: "https://history-game-dev---swatworks.web.app/",
  github: "https://github.com/andrewmoy3/SwatWorks-Web-Games/tree/main",
});
cards.push({
  name: "Spotlyte",
  description:
    "\tSpotlyte is an iOS app that was created to make it easier for college students to host, share, and discover events on campus.  From club meetings to career fairs to private movie nights with friends, Spotlyte centralizes all the events on campus in one place. Spotlyte allows both students and organizations to create events, and will recommend events to you based on your interests and friends.",
  technologies: [
    {
      name: "Figma",
      image: images.figma,
    },
    {
      name: "Swift",
      image: images.swift,
    },
    {
      name: "Google Cloud",
      image: images.google,
    },
    {
      name: "Prisma",
      image: images.prisma,
    },
    {
      name: "Next.js",
      image: images.nextjs,
    },
    {
      name: "JavaScript",
      image: images.js,
    },
  ],
  image: images.spotlyte,
  link: "https://spotlyteapp.com/",
  github: "https://github.com/zzanehip/Spotlyte",
});
cards.push({
  name: "Airpool",
  description:
    "\tAirpool is a web app that was created by the Swarthmore College Computer Society to help Swarthmore students find people to carpool with to and from the Philadelphia airport. Its intention was to allow students to reduce the cost of ride-sharing services by splitting the cost with others. ",
  technologies: [
    {
      name: "Next.js",
      image: images.nextjs,
    },
    {
      name: "Docker",
      image: images.docker,
    },
    {
      name: "React",
      image: images.react,
    },
  ],
  image: images.airpool,
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
