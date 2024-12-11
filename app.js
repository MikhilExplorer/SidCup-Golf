document.addEventListener("keydown", function () {
  ScrollTrigger.refresh();
});
document.addEventListener("wheel", function () {
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
    end: "top -70%",
    scrub: 2,
  },
});
gsap.from(".aboutus", {
  y: "50",
  opacity: "0",
  duration: "0.75",
  scrollTrigger: {
    trigger: ".aboutus",
    scroller: "body",
    // markers:true,
    start: "top 95%",
  },
});
gsap.from(".cards", {
  y: "50",
  opacity: "0",
  duration: "0.75",
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    // markers:true,
    start: "top 97%",
  },
});
gsap.to("#quote1", {
  x: "9vw",
  y: "5vh",
  duration: 0.9,
  ease: "power1.in",
  scrollTrigger: {
    trigger: ".review",
    scroller: "body",
    // markers:true,
    start: "top 65%",
    // scrub:2,
  },
});
gsap.to("#quote2", {
  x: "-9vw",
  y: "-5vh",
  duration: 0.9,
  ease: "power1.in",
  scrollTrigger: {
    trigger: ".review",
    scroller: "body",
    // markers:true
    start: "top 65%",
    // scrub:2,
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
  },
});
