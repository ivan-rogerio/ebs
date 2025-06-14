AOS.init();

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".advantage", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".advantage__card", {
  ...scrollRevealOption,
  interval: 500,
});


ScrollReveal().reveal(".about", {
  ...scrollRevealOption,
});


ScrollReveal().reveal(".services", {
  ...scrollRevealOption,
});


ScrollReveal().reveal(".subscribe__container", {
  ...scrollRevealOption,
});


ScrollReveal().reveal(".footer__container", {
  ...scrollRevealOption,
});




