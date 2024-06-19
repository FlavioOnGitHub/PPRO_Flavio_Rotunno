import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

var valeurs = document.querySelector(".valeurs");

gsap.to(".valeurs-background", {
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=3000 bottom",
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
      start: "top-=3000 bottom",
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
      start: "top-=3000 bottom",
      end: "top+=580 bottom",
      // markers: true,
      pin: image,
      scrub: 1,
    },
  });
});

gsap.to(".valeurs-slide-1", {
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=3000 bottom",
    end: "top-=2400 bottom",
    // markers: true,
    scrub: 1,
  },
  x: -600,
  opacity: 0,
  duration: 1,
  ease: "power1.inOut",
});

const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=2400 bottom", // Start animation when .cards-container reaches this point
    end: "top-=1800 bottom", // End animation when .cards-container reaches this point
    scrub: 1,
    // markers: true,
  },
});

// Add animation sequence to the timeline
timeline1
  .fromTo(
    ".valeurs-slide-2",
    { x: 600, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 }
  )
  .to(".valeurs-slide-2", { duration: 1, delay: 1, ease: "power1.inOut" }) // Pause for 1 second in the middle
  .to(".valeurs-slide-2", {
    x: -600,
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
  });

const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=1800 bottom", // Start animation when .cards-container reaches this point
    end: "top-=1200 bottom", // End animation when .cards-container reaches this point
    scrub: 1,
    // markers: true,
  },
});

// Add animation sequence to the timeline
timeline2
  .fromTo(
    ".valeurs-slide-3",
    { x: 600, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 }
  )
  .to(".valeurs-slide-3", { duration: 1, delay: 1, ease: "power1.inOut" }) // Pause for 1 second in the middle
  .to(".valeurs-slide-3", {
    x: -600,
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
  });

const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=1200 bottom", // Start animation when .cards-container reaches this point
    end: "top-=600 bottom", // End animation when .cards-container reaches this point
    scrub: 1,
    // markers: true,
  },
});

// Add animation sequence to the timeline
timeline3
  .fromTo(
    ".valeurs-slide-4",
    { x: 600, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 }
  )
  .to(".valeurs-slide-4", { duration: 1, delay: 1, ease: "power1.inOut" }) // Pause for 1 second in the middle
  .to(".valeurs-slide-4", {
    x: -600,
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
  });

const timeline4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top-=600 bottom", // Start animation when .cards-container reaches this point
    end: "top-=100 bottom", // End animation when .cards-container reaches this point
    scrub: 1,
    // markers: true,
  },
});

// Add animation sequence to the timeline
timeline4.fromTo(
  ".valeurs-slide-final",
  { x: 600, opacity: 0, ease: "power1.inOut" },
  { x: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
);
