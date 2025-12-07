document.addEventListener("DOMContentLoaded", function () {
  // 1. Elements selection
  const contentPanels = document.querySelectorAll(".comic-panel");
  const navButtons = document.querySelectorAll(".nav-btn"); // Selected both mobile and desktop buttons

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // 2. Function to switch sections
  function showSection(sectionId) {
    // Hide all panels
    contentPanels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    // Show target panel
    const targetPanel = document.getElementById(`section-${sectionId}`);
    if (targetPanel) {
      targetPanel.classList.remove("hidden");
    }

    // Scroll to top on mobile
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 3. Attach Click Listeners to Navigation Buttons
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      showSection(section);

      // If mobile menu is open, close it after clicking
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
      }
    });
  });

  // 4. Mobile Menu Logic
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
    });

    closeMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    });
  }

  // 5. Default Load
  showSection("about");
});
