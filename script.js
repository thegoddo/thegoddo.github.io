document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Element Selection ---
  const contentPanels = document.querySelectorAll(".comic-panel");
  const navButtons = document.querySelectorAll(".nav-btn");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  const speechTitles = document.querySelectorAll(".dynamic-header");

  // --- 2. State Tracking (NEW) ---
  let currentActiveSection = "about"; // Default start section

  // --- 3. Dialogues Data ---
  const dialogues = {
    about: `<span style="color: red">ORIGIN STORY</span>: The Man Behind the Mask`,
    portfolio: `<span style="color: red">MISSION LOG</span>: The Collection!`,
    experience: `<span style="color: red">BATTLE LOG</span>: The Training Arc`,
    contact: `<span style="color: red">ALERT</span>: Signal the Hero!`,
  };

  // --- 4. Navigation Logic ---
  function showSection(sectionId) {
    // Update the state so we know what to reset to
    currentActiveSection = sectionId;

    // Hide all panels
    contentPanels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    // Show target panel
    const targetPanel = document.getElementById(`section-${sectionId}`);
    if (targetPanel) {
      targetPanel.classList.remove("hidden");
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Reset header text immediately to match the new section
    if (dialogues[sectionId]) {
      speechTitles.forEach((title) => {
        title.innerHTML = dialogues[sectionId];
      });
    }
  }

  // --- 5. Event Listeners ---
  navButtons.forEach((btn) => {
    // Click Event (Switch Section)
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      showSection(section);

      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
      }
    });

    // Hover Enter (Preview Section Text)
    btn.addEventListener("mouseenter", () => {
      const section = btn.getAttribute("data-section");
      if (dialogues[section]) {
        speechTitles.forEach((title) => {
          title.innerHTML = dialogues[section];
        });
      }
    });

    // Hover Leave (Reset to CURRENT Active Section, not always 'About')
    btn.addEventListener("mouseleave", () => {
      if (dialogues[currentActiveSection]) {
        speechTitles.forEach((title) => {
          title.innerHTML = dialogues[currentActiveSection];
        });
      }
    });
  });

  // --- 6. Mobile Menu Toggle ---
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

  showSection("about");
});
document.addEventListener("click", (e) => {
  if (
    e.target.closest("a") ||
    e.target.closest("button") ||
    e.target.closest("#mobileMenu")
  )
    return;

  const images = [
    "/effects/bang.png",
    "/effects/bang3.png",
    "/effects/boom.png",
    "/effects/boom2.png",
    "/effects/cool.png",
    "/effects/crash.png",
    "/effects/ouch.png",
    "/effects/ouch2.png",
    "/effects/poof.png",
    "/effects/wow.png",
    "/effects/zap.png",
  ];

  const el = document.createElement("div");
  el.classList.add("action-word");

  const img = document.createElement("img");
  img.src = images[Math.floor(Math.random() * images.length)];
  img.alt = "Comic Action Effect";
  el.appendChild(img);

  el.style.left = e.clientX + "px";
  el.style.top = e.clientY + "px";

  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 500);
});
