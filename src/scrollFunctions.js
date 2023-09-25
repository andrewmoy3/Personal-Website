function scrollToAbout() {
  const contentDiv = document.getElementById("contentDiv");
  const aboutSection = document.getElementById("about");
  console.log("UE");
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
  const projectsSection = document.getElementById("contact");
  const offset = 100; // Adjust this value as needed
  const targetPosition =
    projectsSection.getBoundingClientRect().top + contentDiv.scrollTop - offset;
  contentDiv.scrollTo({ top: targetPosition, behavior: "smooth" });
}

export { scrollToAbout, scrollToProjects, scrollToContact };
