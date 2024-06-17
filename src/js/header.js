import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Fonction pour récupérer la valeur d'une variable CSS
function getCSSVariableValue(variableName) {
  // Accède aux styles du document
  const rootStyles = getComputedStyle(document.documentElement);
  // Récupère la valeur de la variable
  return rootStyles.getPropertyValue(variableName).trim();
}

// Récupère les valeurs des variables CSS
const color1 = getCSSVariableValue("--color-1");
const color2 = getCSSVariableValue("--color-2");
const color3 = getCSSVariableValue("--color-3");

gsap.to(".header-title", {
  scrollTrigger: {
    trigger: ".header-title",
    start: "top+=100 top+=200",
    end: "bottom+=200 top",
    markers: true,
    scrub: 1,
  },
  y: -1000,
  rotation: 2,
  opacity: -2,
  duration: 1,
});

gsap.to(".header-bottle-container", {
  scrollTrigger: {
    trigger: ".header-title",
    start: "top+=100 top+=200",
    end: "bottom+=200 top",
    markers: true,
    scrub: 1,
  },
  x: -1000,
  y: -1000,
  rotation: 2,
  opacity: -2,
  duration: 1,
});

gsap.to(".header-text-container", {
  scrollTrigger: {
    trigger: ".header-title",
    start: "top+=100 top+=200",
    end: "bottom+=200 top",
    markers: true,
    scrub: 0.5,
  },
  x: 500,
  y: -500,
  rotation: 2,
  opacity: -2,
  duration: 1,
});

gsap.to(".header-arrow", {
  scrollTrigger: {
    trigger: ".header-title",
    start: "top+=100 top+=200",
    end: "bottom+=200 top",
    markers: true,
    scrub: 2,
  },
  opacity: -1,
  duration: 1,
});

gsap.to(".header-arrow", {
  scrollTrigger: {
    trigger: ".header-title",
    start: "top+=100 top+=200",
    end: "bottom+=200 top",
    markers: true,
    scrub: 2,
  },
  opacity: -1,
  duration: 1,
});

gsap.to("body", {
  scrollTrigger: {
    trigger: ".header-title",
    start: "top+=100 top+=200",
    end: "bottom+=200 top",
    markers: true,
    scrub: 1,
  },
  backgroundColor: color3,
  duration: 1,
});
