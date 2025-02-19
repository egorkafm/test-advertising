import gsap from "gsap";

export function animateSlide1() {
  gsap.from(".slide1-title", { y: 50, opacity: 0, duration: 1, ease: "power2.out" });
  gsap.from(".slide1-sub-title", { y: 50, opacity: 0, duration: 1.2, delay: 0.2, ease: "power2.out" });

  gsap.from(".slide1-packshots", { opacity: 0, scale: 0.5, duration: 1.2, delay: 0.4, ease: "power2.out" });

  gsap.from(".slide1-arrow", { x: 50, opacity: 0, duration: 1.4, delay: 0.6, ease: "power2.out" });

  gsap.fromTo(
    ".slide1-gesture",
    { opacity: 0, duration: 1.6, delay: 0.8, ease: "power2.out",},
    {
      opacity: 1,
      repeat: -1,
      yoyo: true
    }
  );

  gsap.from(".slide1-cta", { scale: 0.5, opacity: 0, duration: 1.4, delay: 1, ease: "power2.out" });

  gsap.from(".slide1-sl", { y: 50, opacity: 0, duration: 1.5, delay: 1.2, ease: "power2.out" });
}

export function animateSlide2() {
  const timeline = gsap.timeline();

  timeline.set(".slide2-container", { opacity: 1, visibility: "visible" })
    .from(".slide2-title", { y: 50, opacity: 0, duration: 1 })
    .from(".slide2-sub-title", { y: 50, opacity: 0, duration: 1 }, "-=0.8")
    .from(".slide2-img1", { opacity: 0, duration: 0.5 })
    .from(".slide2-img2", { opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".slide2-img3", { opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".slide2-img4", { opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".slide2-img5", { opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".slide2-img6", { opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".slide2-img7", { opacity: 0, duration: 0.5 }, "-=0.4")
    .from(".slide2-cta", { scale: 0, opacity: 0, duration: 1 })
    .from(".slide2-legal", { y: 50, opacity: 0, duration: 1 });
}


export function goToSlide2() {
  gsap.to(".slide1", {
    x: "-100vw",
    duration: 1.4,
    ease: "power2.inOut"
  });
  gsap.to(".slide2", {
    x: "0vw",
    duration: 1.4,
    ease: "power2.inOut",
    onComplete: () => {
      animateSlide2();
    }
  });
}




