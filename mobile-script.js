document.addEventListener("DOMContentLoaded", function () {
  const sections = ["about", "portfolio", "experience", "contact"];
  let currentIndex = 0;

  const contentPanels = document.querySelectorAll(".comic-panel");
  const sectionTitle = document.getElementById("sectionTitle");
  const comicLinks = document.querySelectorAll(".comic-link");

  const hamburgerToggle = document.getElementById("hamburgerToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  // --- Section Visibility Logic ---
  function updateUI() {
    const currentSectionId = sections[currentIndex];
    const targetPanelId = `section-${currentSectionId}`;

    // 1. Hide ALL content panels
    contentPanels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    // 2. Show the selected content panel
    const targetPanel = document.getElementById(targetPanelId);
    if (targetPanel) {
      targetPanel.classList.remove("hidden");
    }

    // 3. Update the fixed footer title
    sectionTitle.textContent = currentSectionId.toUpperCase();

    // 4. Scroll to the top of the content when section changes
    document.querySelector("main").scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- Mobile Navigation ---
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + sections.length) % sections.length;
      updateUI();
    });
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % sections.length;
      updateUI();
    });
  }

  // --- Hamburger Menu Logic ---
  function closeMenu() {
    mobileMenu.classList.remove("active");
    hamburgerToggle.classList.remove("active");
  }

  hamburgerToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    hamburgerToggle.classList.toggle("active");
  });

  // Attach click listener to menu links
  comicLinks.forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      if (section) {
        currentIndex = sections.indexOf(section);
        updateUI();
      }
      // Close the menu after selecting a section
      closeMenu();
    });
  });

  // Load default section on page load
  updateUI();
});
