import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

var burgerIcon = document.querySelector(".nav-burger-icon");
var menu = document.querySelector(".nav-burger-menu");
var navBar = document.querySelector(".nav");
var overlay = document.querySelector(".nav-overlay");
var navBackground = document.querySelector(".navBackground");
var color2 = getCSSVariableValue("--color-2");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("nav-is-hidden");
  burgerIcon.classList.toggle("nav-open");
  navBar.classList.toggle("nav-background");
  overlay.classList.toggle("nav-active-overlay");
};

burgerIcon.addEventListener("click", toggleMenu);

// gsap.to(navBackground, {
//   scrollTrigger: {
//     trigger: ".header-title",
//     start: "top+=100 top+=200",
//     end: "bottom+=200 top",
//     // markers: true,
//     scrub: 1,
//   },
//   backgroundColor: color2,
//   duration: 1,
// });
