import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

var valeurs = document.querySelector(".valeurs");

gsap.to(".valeurs-background", {
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=2000 bottom",
    end: "top bottom",
    // markers: true,
    pin: ".valeurs-background",
    scrub: 1,
  },
});

document.querySelectorAll(".valeurs-text").forEach((slide) => {
  gsap.to(slide, {
    scrollTrigger: {
      trigger: ".cards-container",
      start: "top-=2000 bottom",
      end: "top+=50 bottom",
      // markers: true,
      pin: slide,
      scrub: 1,
    },
  });
});

document.querySelectorAll(".valeurs-image").forEach((image) => {
  gsap.to(image, {
    scrollTrigger: {
      trigger: ".cards-container",
      start: "top-=2000 bottom",
      end: "top+=50 bottom",
      // markers: true,
      pin: image,
      scrub: 1,
    },
  });
});

gsap.to(".valeurs-slide-1", {
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=2000 bottom",
    end: "top-=1800 bottom",
    markers: true,
    scrub: 1,
  },
  x: -1200,
  opacity: 0,
  duration: 1,
});
