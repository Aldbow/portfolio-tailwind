// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Fading animation for sections with better performance
const allSections = document.querySelectorAll(".section"); // Selecting all sections with the 'section' class

const fadingSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden"); // Removing hidden class to trigger fade-in animation
  observer.unobserve(entry.target); // Unobserving the section once it's visible
};

// Creating Intersection Observer for fading animation
const sectionObserver = new IntersectionObserver(fadingSection, {
  root: null,
  threshold: 0.12,
});

allSections.forEach((section) => {
  sectionObserver.observe(section); // Observing each section
  section.classList.add("section__hidden"); // Adding hidden class initially
});
