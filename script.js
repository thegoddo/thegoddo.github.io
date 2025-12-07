document.addEventListener("DOMContentLoaded", function () {
  // 1. Elements selection
  const contentPanels = document.querySelectorAll(".comic-panel");
  const navButtons = document.querySelectorAll(".nav-btn"); // Selected both mobile and desktop buttons

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  function showSection(sectionId) {
    contentPanels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    const targetPanel = document.getElementById(`section-${sectionId}`);
    if (targetPanel) {
      targetPanel.classList.remove("hidden");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      showSection(section);

      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
      }
    });
  });

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
  // Add this to script.js
  const speechTitles = document.querySelectorAll(".dynamic-header");
  const defaultSpeech = `<span style="color: red">About Me</span>: Developer Extraordinaire!`;

  // Map sections to specific dialogue
  const dialogues = {
    about: `<span style="color: red">About Me</span>: Who is behind the mask?`,
    portfolio: `<span style="color: blue">Portfolio</span>: Behold my creations!`,
    experience: `<span style="color: green">Experience</span>: My battle history!`,
    contact: `<span style="color: orange">Contact</span>: Send the signal now!`,
  };

  // Add listeners to sidebar buttons (navButtons is already defined in your script)
  navButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      const section = btn.getAttribute("data-section");

      // 2. Loop through ALL speech titles and update them
      if (dialogues[section]) {
        speechTitles.forEach((title) => {
          title.innerHTML = dialogues[section];
        });
      }
    });

    btn.addEventListener("mouseleave", () => {
      // 3. Reset ALL speech titles
      speechTitles.forEach((title) => {
        title.innerHTML = defaultSpeech;
      });
    });
  });

  // Add this inside your DOMContentLoaded event in script.js

  const panels = document.querySelectorAll(".comic-panel");

  panels.forEach((panel) => {
    panel.addEventListener("mousemove", (e) => {
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation (max 10 degrees)
      const xRotation = -1 * (((y - rect.height / 2) / rect.height) * 10);
      const yRotation = ((x - rect.width / 2) / rect.width) * 10;

      // Apply the transform
      panel.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });

    // Reset when mouse leaves
    panel.addEventListener("mouseleave", () => {
      panel.style.transform =
        "perspective(1000px) scale(1) rotateX(0) rotateY(0)";
      panel.style.transition = "transform 0.5s ease"; // Smooth reset
    });

    // Remove transition during movement for instant response
    panel.addEventListener("mouseenter", () => {
      panel.style.transition = "none";
    });
  });

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
  img.alt = "Comic Action Effect"; // Accessibility

  el.appendChild(img);

  el.style.left = e.clientX + "px";
  el.style.top = e.clientY + "px";

  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 500);
});
