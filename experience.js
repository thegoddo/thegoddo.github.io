document.addEventListener("DOMContentLoaded", () => {
  // Staggered Arcade Stage Entrance
  gsap.from(".stage-card", {
    y: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.18,
    ease: "back.out(1.4)",
  });

  // Header Entrance
  gsap.from(".header-section", {
    y: -20,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  });
});
