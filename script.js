// Existing logo spin
gsap.set(".logo-img-cls", { transformPerspective: 1000 });
gsap.to(".logo-img-cls", {
  rotationY: 360,
  duration: 4,
  repeat: -1,
  ease: "none",
});

// Game Directory Modal Controls
document.addEventListener("DOMContentLoaded", () => {
  const launchBtn = document.getElementById("launch-btn");
  const modal = document.getElementById("game-menu-modal");
  const closeBtn = document.getElementById("close-menu-btn");
  const menuItems = document.querySelectorAll(".menu-item");

  function openMenu(e) {
    if (e) e.preventDefault();
    modal.classList.remove("hidden");

    // Pop-in animation for menu card
    gsap.fromTo(
      ".menu-card",
      { scale: 0.8, opacity: 0, y: -20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" },
    );

    // Stagger animation for menu list options
    gsap.fromTo(
      ".menu-item",
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.25, stagger: 0.08, delay: 0.1 },
    );
  }

  function closeMenu() {
    gsap.to(".menu-card", {
      scale: 0.8,
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        modal.classList.add("hidden");
      },
    });
  }

  if (launchBtn) launchBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  // Close when clicking outside card or selecting an item
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeMenu();
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
});
