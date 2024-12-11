document.addEventListener("wheel", function () {
  ScrollTrigger.refresh();
});
document.addEventListener("keydown", function () {
  ScrollTrigger.refresh();
});
let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main");
let blur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {
  gsap.to(".cursor", {
    x: dets.x,
    y: dets.y,
  });
  gsap.to(".cursor-blur", {
    x: dets.x - 250,
    y: dets.y - 250,
  });
});
gsap.to(".nav", {
  backgroundColor: "black",
  height: "15vh",
  padding: "3.75vw 5vw",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers:true,
    start: "top -7%",
    end: "bottom 12%",
    scrub: 2,
  },
});
gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers:true,
    start: "top -7%",
    end: "top -60%",
    scrub: 2,
  },
});
gsap.from(".aboutus", {
  y: "50",
  opacity: "0",
  duration: "0.85",
  scrollTrigger: {
    trigger: ".aboutus",
    scroller: "body",
    // markers:true,
    start: "bottom 95%",
  },
});
gsap.from(".cards", {
  y: "50",
  opacity: "0",
  duration: "1",
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    // markers:true,
    start: "bottom 97%",
  },
});
// Quote 1 Animation
gsap.to("#quote1", {
  x: "9vw",
  y: "5vh",
  duration: 1,        // Smooth animation duration
  ease: "power1.out", // Natural easing
  scrollTrigger: {
    trigger: "#quote1", // Element-specific trigger
    start: "top -285%",   // Fires only when #quote1 enters 85% of viewport height
  },
});

// Quote 2 Animation
gsap.to("#quote2", {
  x: "-9vw",
  y: "-5vh",
  duration: 1,        // Smooth animation duration
  ease: "power1.out", // Natural easing
  scrollTrigger: {
    trigger: "#quote2", // Element-specific trigger
    start: "top -265%",   // Fires only when #quote2 enters 85% of viewport height
  },
});




let highlight = document.querySelectorAll(".highlight");
let up = document.querySelector("#up");
highlight.forEach((el) => {
  el.addEventListener("mouseenter", function () {
    (el.style.color = "white"), (up.style.WebkitTextStroke = "1px #95c11e");
  });
  el.addEventListener("mouseleave", function () {
    el.style.color = "black";
    up.style.WebkitTextStroke = "1px white";
  });
});
gsap.from(up, {
  y: "30px",
  duration: 2,
  scrollTrigger: {
    trigger: ".highlight",
    scroller: "body",
    // markers:true,
    start:"bottom -300%",
  },
});

// down arrow page2 
const arrow = document.querySelector(".arrow");
arrow.addEventListener("click", () => {
    const page2 = document.querySelector(".page2");
    // Calculate the position to scroll to, adjusting for the 100px navbar
    const offsetPosition = page2.getBoundingClientRect().top -  100;

    // Scroll the page to that position smoothly
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});