// ------ Start scripte scroll Trigger - Video + mini img...  ------

gsap.to("#videoplyr", {
  scrollTrigger: {
    trigger: "#topup",
    start: "top top",
    scrub: 2,
    pin: "#topup",
  },
  width: "100%",
});

gsap.to("#one", {
  scrollTrigger: {
    trigger: "#topup",
    start: "top top",
    scrub: 3,
  },
  left: "-600px",
  opacity: 0,
});

gsap.to("#holdr1", {
  scrollTrigger: {
    trigger: "#topup",
    start: "top top",
    scrub: 3,
  },
  left: "-300px",
  opacity: 0,
});

gsap.to("#sx", {
  scrollTrigger: {
    trigger: "#topup",
    start: "top top",
    scrub: 3,
  },
  right: "-600px",
  opacity: 0,
});

gsap.to("#holdr2", {
  scrollTrigger: {
    trigger: "#topup",
    start: "top top",
    scrub: 3,
  },
  right: "-300px",
  opacity: 0,
});

// ------ End scripte scroll Trigger - Video + mini img...  ------

const open = document.querySelector(".container");

const close = document.querySelector(".close");
var t1 = gsap.timeline({ defaults: { duration: 1, ease: "expo.inOut" } });
open.addEventListener("click", () => {
  if (t1.reversed()) {
    t1.play();
  } else {
    t1.to("nav", { right: 0 })
      .to("nav", { height: "100vh" }, "-=.1")
      .to("nav ul a", { opacity: 1, PointerEvent: "all", stagger: 0.2 }, "-=.8")
      .to(".close", { opacity: 1, PointerEvent: "all" }, "-=.8")
      .to("nav", { opacity: 1 }, "-=1");
  }
});

close.addEventListener("click", () => {
  t1.reverse();
});
