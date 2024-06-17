var burgerIcon = document.querySelector(".nav-burger-icon");
var menu = document.querySelector(".nav-burger-menu");
var navBar = document.querySelector(".nav");
var overlay = document.querySelector(".nav-overlay");
var body = document.body;

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("nav-is-hidden");
  burgerIcon.classList.toggle("nav-open");
  navBar.classList.toggle("nav-background");
  overlay.classList.toggle("nav-active-overlay");
  body.classList.toggle("nav-no-scroll");
};

burgerIcon.addEventListener("click", toggleMenu);
