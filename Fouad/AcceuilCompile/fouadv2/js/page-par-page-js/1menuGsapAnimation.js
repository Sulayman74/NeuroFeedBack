//__---Start scripte GSAP Menu !!!

var t1 = gsap.timeline({ paused: true });

var menuToggle = document.getElementById("menuToggle");
var menuBar = gsap.timeline();

menuBar.to(
    ".bar-1",
    0.5,
    {
        attr: { d: "M8,2 L2,8" },
        x: 1,
        ease: Power2.easeInOut,
    },
    "start"
);

menuBar.to(
    ".bar-2",
    0.5,
    {
        autoAlpha: 0,
    },
    "start"
);

menuBar.to(
    ".bar-3",
    0.5,
    {
        attr: { d: "M8,8 L2,2" },
        x: 1,
        ease: Power2.easeInOut,
    },
    "start"
);

menuToggle.addEventListener("click", function () {
    menuBar.reversed(!menuBar.reversed());
    t1.reversed(!t1.reversed());
});

menuBar.reverse();
t1.reverse();

t1.to(".fullpage-menu", {
    duration: 0,
    display: "block",
    ease: "Expo.easeInOut",
});

t1.from(".menu-bg span", {
    duration: 0.6,
    x: "100%",
    stagger: 0.1,
    ease: "Expo.easeInOut",
});

t1.from(
    ".main-menu li a",
    {
        duration: 0.8,
        y: "100%",
        stagger: 0.2,
        ease: "Expo.easeInOut",
    },
    "-=0.5"
);

t1.from(
    ".social-links li",
    {
        duration: 0.7,
        y: "-100%",
        opacity: 0,
        stagger: 0.1,
        ease: "Expo.easeInOut",
    },
    "-=0.5"
);
// ___ fermeture de menu suite au clik link a ;)

$(document).on("click", ".main-menu a", function () {
    menuBar.reversed(!menuBar.reversed());
    t1.reverse(!t1.reverse());
});

  //__---End scripte GSAP Menu !!!