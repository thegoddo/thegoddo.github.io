// Elements
const modal = document.getElementById("myModal");
const btn = document.getElementById("launch-btn");
const span = document.getElementsByClassName("close")[0];
const modalContent = document.querySelector(".modal-content");
const arcadeBtns = document.querySelectorAll(".arcade-play-btn");
const menuLinks = document.querySelectorAll(".menu-link");

// GSAP Timeline setup for opening modal
const openModalTl = gsap.timeline({ paused: true });

openModalTl
  // Step 1: Fade in overlay backdrop
  .to(modal, {
    display: "flex",
    opacity: 1,
    duration: 0.25,
    ease: "power2.out",
  })
  // Step 2: Pop in modal container box
  .fromTo(
    modalContent,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.5)" },
    "-=0.1"
  )
  // Step 3: Stagger buttons entering into position
  .fromTo(
    arcadeBtns,
    { y: -30, opacity: 0, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.35,
      stagger: 0.12,
      ease: "back.out(1.7)",
    },
    "-=0.15"
  );

// Open Modal Trigger
btn.onclick = function (e) {
  if (e) e.preventDefault();
  openModalTl.restart();
};

// Handle Menu Button Click with Exit Animation
menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Pause default instant page jump
    const targetUrl = this.getAttribute("href");

    // Exit Timeline: Reverse retrieve animation
    gsap.timeline({
      onComplete: () => {
        window.location.href = targetUrl; // Navigate once animation finishes
      },
    })
      // Stagger buttons retracting back up/out
      .to(arcadeBtns, {
        y: -30,
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        stagger: 0.08,
        ease: "power2.in",
      })
      // Shrink modal box
      .to(
        modalContent,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.15,
          ease: "power2.in",
        },
        "-=0.1"
      )
      // Fade out background overlay
      .to(
        modal,
        {
          opacity: 0,
          duration: 0.15,
          ease: "power2.in",
        },
        "-=0.1"
      );
  });
});

// Close Modal Function
function closeModal() {
  gsap.to(modal, {
    opacity: 0,
    duration: 0.2,
    ease: "power2.in",
    onComplete: () => {
      gsap.set(modal, { display: "none" });
    },
  });
}

// Close Triggers
span.onclick = closeModal;

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};
