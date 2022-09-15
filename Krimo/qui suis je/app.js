let bgImage = document.querySelector(".img-container"); 

//  Now registering thescrollTrigger plugin to gsap
gsap.registerPlugin(ScrollTrigger); 

// Now we are going to animate
gsap.fromTo(
    bgImage,
    {
        clipPath: "circle(5% at 72% 45%)",
    },
    {
        clipPath: "circle(85% at 60% 50%)",
        ease: "none",
        
      //  We want to do that animation on scroll
        scrollTrigger: {
        trigger: bgImage,
        scrub: 1,
        start: "top center",
        end: "top center-=200",
        },
    }
);

"use strict";

const hello = document.querySelector(".hello");
const divs = hello.querySelectorAll("img");

const options = {
  rootMargin: "0",
  threshold: 0.5,
};

const observer = new IntersectionObserver(entries => {
  console.log(entries);

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target);
    //   entry.target.style.transform = "scale(2.5)";
      entry.target.classList.add("active");
    } else if (entry.target.classList.contains("active")) {
      //   entry.target.style.transform = "scale(1)";
      observer.unobserve(entry.target);
    }
  });
});

const item = divs.forEach(div => {
  observer.observe(div, options);
});