document.addEventListener("DOMContentLoaded", function () {
  const contentPanels = document.querySelectorAll(".comic-panel");
  const navButtons = document.querySelectorAll(".nav-btn");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const speechTitles = document.querySelectorAll(".dynamic-header");

  let currentActiveSection = "about";

  const dialogues = {
    about: `<span style="color: red">ORIGIN STORY</span>: The Man Behind the Mask`,
    portfolio: `<span style="color: red">MISSION LOG</span>: The Collection!`,
    experience: `<span style="color: red">BATTLE LOG</span>: The Training Arc`,
    contact: `<span style="color: red">ALERT</span>: Signal the Hero!`,
  };

  // Mobile Nav Elements
  const mobilePrevBtn = document.getElementById("mobilePrev");
  const mobileNextBtn = document.getElementById("mobileNext");
  const mobilePageTitle = document.getElementById("mobilePageTitle");
  const sectionsList = ["about", "portfolio", "experience", "contact"];
  const sectionTitles = {
    about: "ORIGIN",
    portfolio: "MISSIONS",
    experience: "BATTLES",
    contact: "ALERT",
  };

  function updateMobileNavUI(sectionId) {
    if (mobilePageTitle && sectionTitles[sectionId]) {
      mobilePageTitle.innerText = sectionTitles[sectionId];
    }
  }

  function showSection(sectionId) {
    currentActiveSection = sectionId;

    contentPanels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    const targetPanel = document.getElementById(`section-${sectionId}`);
    if (targetPanel) {
      targetPanel.classList.remove("hidden");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (dialogues[sectionId]) {
      speechTitles.forEach((title) => {
        title.innerHTML = dialogues[sectionId];
      });
    }

    updateMobileNavUI(sectionId);
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      showSection(section);

      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
      }
    });

    btn.addEventListener("mouseenter", () => {
      const section = btn.getAttribute("data-section");
      if (dialogues[section]) {
        speechTitles.forEach((title) => {
          title.innerHTML = dialogues[section];
        });
      }
    });

    btn.addEventListener("mouseleave", () => {
      if (dialogues[currentActiveSection]) {
        speechTitles.forEach((title) => {
          title.innerHTML = dialogues[currentActiveSection];
        });
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

  // Mobile Bottom Navigation Listeners
  if (mobilePrevBtn && mobileNextBtn) {
    mobilePrevBtn.addEventListener("click", () => {
      let currentIndex = sectionsList.indexOf(currentActiveSection);
      let newIndex =
        (currentIndex - 1 + sectionsList.length) % sectionsList.length;
      showSection(sectionsList[newIndex]);
    });

    mobileNextBtn.addEventListener("click", () => {
      let currentIndex = sectionsList.indexOf(currentActiveSection);
      let newIndex = (currentIndex + 1) % sectionsList.length;
      showSection(sectionsList[newIndex]);
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
