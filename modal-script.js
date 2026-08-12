// List of external project HTML files
const projectFiles = [
  "projects/project.html",
  "projects/project2.html",
  "projects/project3.html",
];

let currentProjectIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("project-modal-content");
  const prevBtn = document.getElementById("prev-project-btn");
  const nextBtn = document.getElementById("next-project-btn");
  const closeBtn = document.getElementById("close-project-btn");

  // Load external HTML file into modal
  async function loadProject(index) {
    modalContent.innerHTML = `<p class="loading-text">LOADING MISSION DATA...</p>`;

    try {
      const response = await fetch(projectFiles[index]);
      if (!response.ok) throw new Error("Failed to load project file.");
      const htmlText = await response.text();

      modalContent.innerHTML = htmlText;

      // GSAP transition effect for loading new content
      gsap.fromTo(
        modalContent,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3 },
      );
    } catch (err) {
      modalContent.innerHTML = `<p style="color:#ff0055;">ERROR LOADING MISSION FILE</p>`;
    }
  }

  // Open modal at specific project
  window.openProjectModal = function (index = 0) {
    currentProjectIndex = index;
    modal.classList.remove("hidden");
    loadProject(currentProjectIndex);
  };

  // Next/Prev Carousel Logic
  nextBtn.addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex + 1) % projectFiles.length;
    loadProject(currentProjectIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentProjectIndex =
      (currentProjectIndex - 1 + projectFiles.length) % projectFiles.length;
    loadProject(currentProjectIndex);
  });

  // Close logic
  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
});
