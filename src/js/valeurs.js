import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

var valeurs = document.querySelector(".valeurs");

gsap.to(".valeurs-slide-1", {
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=2000 bottom",
    end: "top bottom",
    markers: true,
    pin: ".valeurs-slide-1",
    scrub: 1,
  },
});

gsap.to(".valeurs-image-1", {
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=2000 bottom",
    end: "top+=400 bottom",
    markers: true,
    pin: ".valeurs-image-1",
    scrub: 1,
  },
});

gsap.to(".valeurs-image-2", {
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=2000 bottom",
    end: "top+=400 bottom",
    markers: true,
    pin: ".valeurs-image-2",
    scrub: 1,
  },
});

gsap.to(".valeurs-image-3", {
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=2000 bottom",
    end: "top+=400 bottom",
    markers: true,
    pin: ".valeurs-image-3",
    scrub: 1,
  },
});

gsap.to(".valeurs-background", {
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=2000 bottom",
    end: "top bottom",
    markers: true,
    pin: ".valeurs-background",
    scrub: 1,
  },
});
