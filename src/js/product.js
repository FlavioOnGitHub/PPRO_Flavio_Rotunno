import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

var beer1 = document.querySelector(".product-1");
var beer2 = document.querySelector(".product-2");
var beer3 = document.querySelector(".product-3");
var leftArrow = document.querySelector(".product-left-arrow");
var rightArrow = document.querySelector(".product-right-arrow");
var overlaycolor = document.querySelector(".overlay-color");
var beerCounter = 1;

const changeColors = (color1, color2, color3) => {
  document.documentElement.style.setProperty("--color-1", color1);
  document.documentElement.style.setProperty("--color-2", color2);
  document.documentElement.style.setProperty("--color-3", color3);
};

var rightArrowClick = function rightArrowClick() {
  if (beerCounter === 1) {
    beer1.classList.add("product-hidden");
    beer2.classList.remove("product-hidden");
    beerCounter = 2;
    changeColors("#d6c6ce", "#323131", "#252525");
    overlaycolor.classList.add("overlay-color-shown");
  } else if (beerCounter === 2) {
    beer2.classList.add("product-hidden");
    beer3.classList.remove("product-hidden");
    beerCounter = 3;
    changeColors("#887f70", "#abd5dc", "#8eb0b6");
  } else if (beerCounter === 3) {
    beer3.classList.add("product-hidden");
    beer1.classList.remove("product-hidden");
    beerCounter = 1;
    changeColors("#604c70", "#eae9cd", "#d7d48e");
  }
};

var leftArrowClick = function leftArrowClick() {
  if (beerCounter === 1) {
    beer1.classList.add("product-hidden");
    beer3.classList.remove("product-hidden");
    beerCounter = 3;
    changeColors("#887f70", "#abd5dc", "#8eb0b6");
    body.classList.add("body-2");
    console.log(beerCounter);
  } else if (beerCounter === 3) {
    beer3.classList.add("product-hidden");
    beer2.classList.remove("product-hidden");
    beerCounter = 2;
    changeColors("#d6c6ce", "#323131", "#252525");
  } else if (beerCounter === 2) {
    beer2.classList.add("product-hidden");
    beer1.classList.remove("product-hidden");
    beerCounter = 1;
    changeColors("#604c70", "#eae9cd", "#d7d48e");
  }
};

rightArrow.addEventListener("click", rightArrowClick);
leftArrow.addEventListener("click", leftArrowClick);

gsap.fromTo(
  ".product-beer",
  {
    y: 400, // Valeur initiale
    opacity: 0, // Ajout d'une valeur initiale pour l'opacité si nécessaire
  },
  {
    y: 0,
    opacity: 1, // Valeur finale pour l'opacité
    duration: 1,
    scrollTrigger: {
      trigger: ".product",
      start: "top-=150 top+=300",
      end: "top+200 top+=200",
      toggleActions: "play none none reverse",
      //   markers: true,
    },
  }
);

gsap.fromTo(
  ".product-background",
  {
    y: 400, // Valeur initiale
    opacity: 0, // Ajout d'une valeur initiale pour l'opacité si nécessaire
  },
  {
    y: 0,
    opacity: 1, // Valeur finale pour l'opacité
    duration: 1.2,
    scrollTrigger: {
      trigger: ".product",
      start: "top-=150 top+=300",
      end: "top+200 top+=200",
      toggleActions: "play none none reverse",
      //   markers: true,
    },
  }
);

gsap.fromTo(
  ".product-info",
  {
    opacity: 0, // Ajout d'une valeur initiale pour l'opacité si nécessaire
  },
  {
    opacity: 1, // Valeur finale pour l'opacité
    duration: 0.5,
    scrollTrigger: {
      trigger: ".product-beer",
      start: "top-=250 top+=300",
      end: "top-=200 top+=200",
      scrub: 5,
      //   markers: true,
    },
  }
);

gsap.fromTo(
  ".product-navigation",
  {
    opacity: -2,
    y: 100, // Ajout d'une valeur initiale pour l'opacité si nécessaire
  },
  {
    y: 0,
    opacity: 1, // Valeur finale pour l'opacité
    duration: 1.2,
    scrollTrigger: {
      trigger: ".product-beer",
      start: "top-=450 top+=300",
      end: "top-=200 top+=200",
      scrub: 2,
      //   markers: true,
    },
  }
);
