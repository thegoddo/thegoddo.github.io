document.addEventListener("DOMContentLoaded", () => {
  // 1. Logo Rotation Animation
  const logo = document.querySelector(".logo-img-cls");
  if (logo) {
    gsap.set(".logo-img-cls", { transformPerspective: 1000 });
    gsap.to(".logo-img-cls", {
      rotationY: 360,
      duration: 4,
      repeat: -1,
      ease: "none",
    });
  }

  // 2. Modal Elements
  const modal = document.getElementById("myModal");
  const launchBtn = document.getElementById("launch-btn");
  const closeBtn = document.querySelector(".close");
  const modalContent = document.querySelector(".modal-content");
  const arcadeBtns = document.querySelectorAll(".arcade-play-btn");

  // Safeguard: Ensure modal elements exist on page
  if (modal && launchBtn) {
    const openModalTl = gsap.timeline({ paused: true });

    openModalTl
      .to(modal, {
        display: "flex",
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      })
      .fromTo(
        modalContent,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.5)" },
        "-=0.1",
      )
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
        "-=0.15",
      );

    // Click handler to open modal
    launchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openModalTl.restart();
    });

    // Close Modal Handler
    const closeModal = () => {
      gsap.to(modal, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(modal, { display: "none" });
        },
      });
    };

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});
