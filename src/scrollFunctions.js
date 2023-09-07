function scrollToAbout() {
  const aboutSection = document.getElementById("about");
  const offset = 66; // Adjust this value as needed
  const targetPosition =
    aboutSection.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
}

function scrollToProjects() {
  const projectsSection = document.getElementById("portfolio");
  const offset = 100; // Adjust this value as needed
  const targetPosition =
    projectsSection.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
}
function scrollToContact() {
  const projectsSection = document.getElementById("contact");
  const offset = 100; // Adjust this value as needed
  const targetPosition =
    projectsSection.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
}

export { scrollToAbout, scrollToProjects, scrollToContact };
