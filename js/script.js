// SHOW HEADER MENU
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("nav-menu", "nav-toggle");

// LINK ACTIVE
const navLink = document.querySelectorAll(".nav__link");
function linkActive() {
  navLink.forEach((e) => e.classList.remove("active"));
  this.classList.add("active");
}
navLink.forEach((e) => e.addEventListener("click", linkActive));

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: "2000",
});

// Header Animation
sr.reveal(".nav__logo");
sr.reveal(".nav__item", { interval: 200, delay: 300 });
sr.reveal(".nav__button", { delay: 1300 });
sr.reveal(".nav__toggle", { delay: 300 });

// Header Animation
sr.reveal(".home__title");
sr.reveal(".home__text", { delay: 300 });
sr.reveal(".home__button", { delay: 600 });
sr.reveal(".home__img", { delay: 900, origin: "right" });
