import { images } from "./assets/logos";

let cards = [];

cards.push({
  name: "Solar Power Generation Shape Analysis",
  description:
    "\tThis project uses unsupervised learning to discover hidden patterns in daily solar power generation shapes across the United States, and then uses supervised learning to predict those patterns using independent weather features. A full pipeline involving data collection, data cleaning, and exploratory data analysis is included as part of the project. Specific techniques include dimensionality reduction (PCA, t-SNE), clustering (k-means, DBSCAN, hierarchical), regression, and classification. \n\tThis project was completed as part of the 'Introduction to Data Analytics' (DSAN 5000) curriculum at Georgetown University during the Fall 2025 semester. A literature review, full written report, technical walkthrough, code documentation, and GitHub repository can be found at the website below.",
  technologies: [
    {
      name: "Python",
      image: images.python,
    },
    { name: "PyTorch", image: images.pytorch },
    { name: "SciKit-Learn", image: images.sklearn },
    { name: "Pandas", image: images.pandas },
    { name: "seaborn", image: images.seaborn },
    {
      name: "Matplotlib",
      image: images.matplotlib,
    },
  ],
  image: images.solar,
  github: "https://github.com/andrewmoy3/DSAN_5000_final_project",
  link: "https://andrewmoy.georgetown.domains/dsan5000/final_project/",
});

cards.push({
  name: "Statistical Analysis of Air Pollution Causes",
  description:
    "\tThis project uses probabilistic and statistical methods to analyze a variety of factors that contribute to air pollution. Weather patterns, human activity, city demographics, and seasonal trends are analyzed against three major air pollutants to determine the most correlated factors and predict future pollution levels. Additionally, these factors are examined across ten major U.S. cities to explore the differences in behavior of individual cities and regions. Techniques include hypothesis testing, bootstrapping, and ARIMA time series modeling.\n\tThis project was completed as part of the 'Probabilistic Modeling and Statistical Computing' (DSAN 5100) curriculum at Georgetown University during the Fall 2025 semester. A written report, slide deck, and GitHub repository can be found at the website below.",
  technologies: [
    {
      name: "Python",
      image: images.python,
    },
    { name: "R", image: images.r },
    {
      name: "ggplot2",
      image: images.ggplot,
    },
  ],
  image: images.airPoll,
  github: "https://github.com/andrewmoy3/DSAN_5100_final_project",
  link: "https://andrewmoy.georgetown.domains/dsan5100/final_project/",
});
cards.push({
  name: "Multi-Label Classification of Chest X-Ray Images",
  description:
    "\tThis project uses deep learning techniques, convolutional neural networks, and transformers to detect thoracic diseases from 112k+ chest X-ray images. In addition to custom architectures, transfer learning is used on pretrained models. Major aspects of the project include GPU/performance optimization and counteracting severe data imbalance. \n\tThis project was completed as part of the 'Neural Networks and Deep Learning' (DSAN 6600) curriculum at Georgetown University during the Fall 2025 semester, and aims to replicate previous work performed by Wang, Xiaosong, et al. in 2017 (https://nihcc.app.box.com/v/ChestXray-NIHCC/folder/36938765345). A written report, slide deck, code documentation, and GitHub repository can be found at the website below.",
  technologies: [
    {
      name: "Python",
      image: images.python,
    },
    { name: "PyTorch", image: images.pytorch },
    { name: "SciKit-Learn", image: images.sklearn },
  ],
  image: images.chest,
  github: "https://github.com/andrewmoy3/DSAN_6600_final_project",
  link: "https://andrewmoy.georgetown.domains/dsan6600/final_project/",
});
cards.push({
  name: "Geoexchange System Optimization",
  description:
    "\tSwarthmore's newly built geoexchange system involved many building envelope upgrades intended to reduce heat leakages and thereby reduce energy use. This project aims to minimize energy use and energy cost by identifying the most cost effective building envelope upgrades using Python, integer linear programming, and the PuLP Python package. The project was designed in collaboration with the professors, administration, architects, and engineers involved with the 'To Zero By Thirty-Five' project, and recommendations from the findings were shared with college administration. \n\tThis project was completed as the senior thesis for Swarthmore College's engineering program during the 2024-25 academic year.",
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
  github: "https://github.com/andrewmoy3/E90",
  link: "https://works.swarthmore.edu/theses/967/",
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
  description:
    "\tSEND Explorer is a web-based visualization tool created by Certara to visualize data in the 'Standard for Exchange of Nonclinical Data' (SEND) format, a data format created by the CDISC to standardize nonclinical medical study data. The project involved converting the front end of SEND Explorer from Angular to React, while also improving the interface and adding features. My primary responsibility involved consolidating the functionality of five different React components into a single, reusable component and integrating it back into the five different contexts. I also used d3.js to create visualizations of the SEND data, and developed Jest unit tests for various React components. \n\tThis project was completed as part of my internship at Certara during the summer of 2024.",
  technologies: [
    {
      name: "React",
      image: images.react,
    },
    {
      name: "TypeScript",
      image: images.ts,
    },
    {
      name: "d3",
      image: images.d3,
    },
    { name: "Jest", image: images.jest },
  ],
  image: images.certara,
  link: "https://sendexplorer.astellas.certara.net/",
});
cards.push({
  name: "SwatWorks Web Games",
  description:
    "\t A real-time multiplayer web interface was created to implement a set of educational game scripts designed by the professor. The implementation allows the professor to monitor the current status of each player and easily process actions. It was created with vanilla HTML, CSS, and JavaScript, and was my first experience with web development. \n\tThis project was created as part of a winter internship for a history professor at St. John's University during the winter of 2022-2023, as part of Swarthmore College's 'SwatWorks' program.",
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
    "\tSpotlyte is an iOS app that was created to make it easier for college students to host, share, and discover events on campus. Spotlyte allows students and organizations to create events (such as club meetings, career fairs, or even private movie nights with friends), and centralizes all the events on campus in one place. It will also recommend events to you based on your friends and interests. \n\t The app was created and launched during the 2022-23 academic year with four friends, but was only actively maintained for a few years. The app, website, and GitHub repository are no longer available.",
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
  // link: "https://spotlyteapp.com/",
  // github: "https://github.com/zzanehip/Spotlyte",
});
// cards.push({
//   name: "Airpool",
//   description:
//     "\tAirpool is a web app that was created by the Swarthmore College Computer Society to help Swarthmore students find people to carpool with to and from the Philadelphia airport. Its intention was to allow students to reduce the cost of ride-sharing services by splitting the cost with others. ",
//   technologies: [
//     {
//       name: "Next.js",
//       image: images.nextjs,
//     },
//     {
//       name: "Docker",
//       image: images.docker,
//     },
//     {
//       name: "React",
//       image: images.react,
//     },
//   ],
//   image: images.airpool,
//   link: "https://airpool.sccs.swarthmore.edu/",
//   github: "https://github.com/swat-sccs/airpool-v2",
// });

// put cards you want across first row, across second row, then
// across first row of page 2, second row of page 2, etc.
const horizontalOrder = [0, 1, 2, 3, 5, 4, 6, 7];
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
