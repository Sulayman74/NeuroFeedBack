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