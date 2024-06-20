import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

var beer1 = document.querySelector(".product-1");
var beer2 = document.querySelector(".product-2");
var beer3 = document.querySelector(".product-3");
var leftArrow = document.querySelector(".product-left-arrow");
var rightArrow = document.querySelector(".product-right-arrow");
var overlaycolor = document.querySelector(".overlay-color");
var valeursBackground = document.querySelector(".valeurs-background");
var productArrows = document.querySelectorAll(".product-arrow");
var valeursBottle1 = document.querySelector(".valeurs-image-1");
var valeursBottle2 = document.querySelector(".valeurs-image-2");
var valeursBottle3 = document.querySelector(".valeurs-image-3");
var maltBackground = document.querySelector(".product-background");
var footer = document.querySelector(".footer");
var valeursIcons = document.querySelectorAll(".valeurs-icon");
var beerCounter = 1;
var navElementsRight = document.querySelector(".nav-right-elements");
var navLogo = document.querySelector(".nav-logo");
var burgerMenu = document.querySelector(".nav-burger-menu");
var footerImgs = document.querySelectorAll(".footer-img");
var productInfo1 = document.querySelector(".product-info-1");
var productInfo2 = document.querySelector(".product-info-2");
var productInfo3 = document.querySelector(".product-info-3");

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
    valeursBackground.classList.remove("valeurs-background-1");
    valeursBackground.classList.add("valeurs-background-2");
    productArrows.forEach((arrow) => {
      arrow.classList.add("product-arrow-2");
      arrow.classList.remove("product-arrow-1");
    });
    valeursBottle1.classList.add("valeurs-image-hidden");
    valeursBottle2.classList.remove("valeurs-image-hidden");
    maltBackground.classList.remove("product-background-yellow");
    maltBackground.classList.add("product-background-dark");
    footer.classList.add("footer-2");
    footer.classList.remove("footer-1");
    valeursIcons.forEach((icon) => {
      icon.classList.add("valeurs-icon-2");
      icon.classList.remove("valeurs-icon-1");
    });
    productInfo2.classList.add("product-info-dark-mode");
    navElementsRight.classList.add("nav-dark-mode");
    navLogo.classList.add("nav-dark-mode");
    burgerMenu.classList.add("burger-menu-dark-mode");
    footer.classList.add("footer-dark-mode");
    footerImgs.forEach((img) => {
      img.classList.add("footer-img-dark-mode");
    });
    productInfo1.classList.add("product-info-hidden");
    productInfo2.classList.remove("product-info-hidden");
  } else if (beerCounter === 2) {
    beer2.classList.add("product-hidden");
    beer3.classList.remove("product-hidden");
    beerCounter = 3;
    changeColors("#63594A", "#abd5dc", "#8eb0b6");
    valeursBackground.classList.remove("valeurs-background-2");
    valeursBackground.classList.add("valeurs-background-3");
    productArrows.forEach((arrow) => {
      arrow.classList.add("product-arrow-3");
      arrow.classList.remove("product-arrow-2");
    });
    valeursBottle2.classList.add("valeurs-image-hidden");
    valeursBottle3.classList.remove("valeurs-image-hidden");
    maltBackground.classList.remove("product-background-dark");
    maltBackground.classList.add("product-background-blue");
    footer.classList.add("footer-3");
    footer.classList.remove("footer-2");
    valeursIcons.forEach((icon) => {
      icon.classList.add("valeurs-icon-3");
      icon.classList.remove("valeurs-icon-2");
      productInfo2.classList.remove("product-info-dark-mode");
      navElementsRight.classList.remove("nav-dark-mode");
      navLogo.classList.remove("nav-dark-mode");
      burgerMenu.classList.remove("burger-menu-dark-mode");
      footer.classList.remove("footer-dark-mode");
      footerImgs.forEach((img) => {
        img.classList.remove("footer-img-dark-mode");
      });
    });
    productInfo2.classList.add("product-info-hidden");
    productInfo3.classList.remove("product-info-hidden");
  } else if (beerCounter === 3) {
    beer3.classList.add("product-hidden");
    beer1.classList.remove("product-hidden");
    beerCounter = 1;
    changeColors("#604c70", "#e1dfac", "#d7d48e");
    valeursBackground.classList.remove("valeurs-background-3");
    valeursBackground.classList.add("valeurs-background-1");
    productArrows.forEach((arrow) => {
      arrow.classList.add("product-arrow-1");
      arrow.classList.remove("product-arrow-3");
    });
    valeursBottle3.classList.add("valeurs-image-hidden");
    valeursBottle1.classList.remove("valeurs-image-hidden");
    maltBackground.classList.remove("product-background-blue");
    maltBackground.classList.add("product-background-yellow");
    footer.classList.add("footer-1");
    footer.classList.remove("footer-3");
    valeursIcons.forEach((icon) => {
      icon.classList.add("valeurs-icon-1");
      icon.classList.remove("valeurs-icon-3");
    });
    productInfo3.classList.add("product-info-hidden");
    productInfo1.classList.remove("product-info-hidden");
  }
};

var leftArrowClick = function leftArrowClick() {
  if (beerCounter === 1) {
    beer1.classList.add("product-hidden");
    beer3.classList.remove("product-hidden");
    beerCounter = 3;
    changeColors("#63594A", "#abd5dc", "#8eb0b6");
    overlaycolor.classList.add("overlay-color-shown");
    valeursBackground.classList.remove("valeurs-background-1");
    valeursBackground.classList.add("valeurs-background-3");
    productArrows.forEach((arrow) => {
      arrow.classList.remove("product-arrow-1");
      arrow.classList.add("product-arrow-3");
    });
    valeursBottle1.classList.add("valeurs-image-hidden");
    valeursBottle3.classList.remove("valeurs-image-hidden");
    maltBackground.classList.remove("product-background-yellow");
    maltBackground.classList.add("product-background-blue");
    footer.classList.add("footer-3");
    footer.classList.remove("footer-1");
    valeursIcons.forEach((icon) => {
      icon.classList.add("valeurs-icon-3");
      icon.classList.remove("valeurs-icon-1");
    });
    productInfo1.classList.add("product-info-hidden");
    productInfo3.classList.remove("product-info-hidden");
  } else if (beerCounter === 3) {
    beer3.classList.add("product-hidden");
    beer2.classList.remove("product-hidden");
    beerCounter = 2;
    changeColors("#d6c6ce", "#323131", "#252525");
    valeursBackground.classList.remove("valeurs-background-3");
    valeursBackground.classList.add("valeurs-background-2");
    productArrows.forEach((arrow) => {
      arrow.classList.remove("product-arrow-3");
      arrow.classList.add("product-arrow-2");
    });
    valeursBottle3.classList.add("valeurs-image-hidden");
    valeursBottle2.classList.remove("valeurs-image-hidden");
    maltBackground.classList.remove("product-background-blue");
    maltBackground.classList.add("product-background-dark");
    footer.classList.add("footer-2");
    footer.classList.remove("footer-3");
    valeursIcons.forEach((icon) => {
      icon.classList.add("valeurs-icon-2");
      icon.classList.remove("valeurs-icon-3");
    });
    productInfo2.classList.add("product-info-dark-mode");
    navElementsRight.classList.add("nav-dark-mode");
    navLogo.classList.add("nav-dark-mode");
    burgerMenu.classList.add("burger-menu-dark-mode");
    footer.classList.add("footer-dark-mode");
    footerImgs.forEach((img) => {
      img.classList.add("footer-img-dark-mode");
    });
    productInfo3.classList.add("product-info-hidden");
    productInfo2.classList.remove("product-info-hidden");
  } else if (beerCounter === 2) {
    beer2.classList.add("product-hidden");
    beer1.classList.remove("product-hidden");
    beerCounter = 1;
    changeColors("#604c70", "#e1dfac", "#d7d48e");
    valeursBackground.classList.remove("valeurs-background-2");
    valeursBackground.classList.add("valeurs-background-1");
    productArrows.forEach((arrow) => {
      arrow.classList.add("product-arrow-1");
      arrow.classList.remove("product-arrow-2");
    });
    valeursBottle2.classList.add("valeurs-image-hidden");
    valeursBottle1.classList.remove("valeurs-image-hidden");
    maltBackground.classList.remove("product-background-dark");
    maltBackground.classList.add("product-background-yellow");
    footer.classList.add("footer-1");
    footer.classList.remove("footer-2");
    valeursIcons.forEach((icon) => {
      icon.classList.add("valeurs-icon-1");
      icon.classList.remove("valeurs-icon-2");
    });
    productInfo2.classList.remove("product-info-dark-mode");
    navElementsRight.classList.remove("nav-dark-mode");
    navLogo.classList.remove("nav-dark-mode");
    burgerMenu.classList.remove("burger-menu-dark-mode");
    footer.classList.remove("footer-dark-mode");
    footerImgs.forEach((img) => {
      img.classList.remove("footer-img-dark-mode");
    });
    productInfo2.classList.add("product-info-hidden");
    productInfo1.classList.remove("product-info-hidden");
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
    opacity: 3, // Valeur finale pour l'opacité
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
