function scrollToHome() {
  const contentDiv = document.getElementById("contentDiv");
  const homeSection = document.getElementById("home");
  const offset = 66; // Adjust this value as needed
  const targetPosition =
    homeSection.getBoundingClientRect().top + contentDiv.scrollTop - offset;
  contentDiv.scrollTo({ top: targetPosition, behavior: "smooth" });
}
function scrollToAbout() {
  const contentDiv = document.getElementById("contentDiv");
  const aboutSection = document.getElementById("about");
  const offset = 66; // Adjust this value as needed
  const targetPosition =
    aboutSection.getBoundingClientRect().top + contentDiv.scrollTop - offset;
  contentDiv.scrollTo({ top: targetPosition, behavior: "smooth" });
}

function scrollToProjects() {
  const contentDiv = document.getElementById("contentDiv");
  const projectsSection = document.getElementById("portfolio");
  const offset = 100; // Adjust this value as needed
  const targetPosition =
    projectsSection.getBoundingClientRect().top + contentDiv.scrollTop - offset;
  contentDiv.scrollTo({ top: targetPosition, behavior: "smooth" });
}
function scrollToContact() {
  const contentDiv = document.getElementById("contentDiv");
  const projectsSection = document.getElementById("misc");
  const offset = 100; // Adjust this value as needed
  const targetPosition =
    projectsSection.getBoundingClientRect().top + contentDiv.scrollTop - offset;
  contentDiv.scrollTo({ top: targetPosition, behavior: "smooth" });
}

export { scrollToHome, scrollToAbout, scrollToProjects, scrollToContact };
