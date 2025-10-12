document.addEventListener("DOMContentLoaded", function () {
  const contentPanels = document.querySelectorAll(".comic-panel");
  const comicLinks = document.querySelectorAll(".comic-link");

  function showSection(sectionId) {
    // 1. Hide ALL content panels
    contentPanels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    // 2. Show the selected content panel
    const targetPanel = document.getElementById(`section-${sectionId}`);
    if (targetPanel) {
      targetPanel.classList.remove("hidden");
    }
  }

  // Attach click listener to sidebar links
  comicLinks.forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      showSection(section);
    });
  });

  // Load default section on page load
  // The 'about' section is set as the default
  showSection("about");
});
