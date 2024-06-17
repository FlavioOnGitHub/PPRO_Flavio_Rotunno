var burgerIcon = document.querySelector(".nav-burger-icon");
var menu = document.querySelector(".nav-burger-menu");
var navBar = document.querySelector(".nav");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("nav-is-hidden");
  burgerIcon.classList.toggle("nav-open");
  navBar.classList.toggle("nav-background");
};

burgerIcon.addEventListener("click", toggleMenu);
