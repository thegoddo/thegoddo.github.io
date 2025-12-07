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
  window.onload = function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }
  };
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
// --- ADVANCED CHEAT CODE ENGINE ---
const pressedKeys = [];
const secretCodes = {
  // 1. KONAMI CODE (Toggle Villain Mode)
  konami: {
    sequence: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
    action: toggleVillainMode
  },
  // 2. GOD MODE (Type 'god')
  god: {
    sequence: ['g', 'o', 'd'],
    action: toggleGodMode
  },
  // 3. DEBUG MODE (Type 'debug')
  debug: {
    sequence: ['d', 'e', 'b', 'u', 'g'],
    action: toggleDebugMode
  }
};

document.addEventListener('keydown', (e) => {
  pressedKeys.push(e.key);
  
  // Keep buffer only as long as the longest code (10 keys) to save memory
  if (pressedKeys.length > 20) {
    pressedKeys.shift();
  }

  // Check every cheat code
  Object.values(secretCodes).forEach(cheat => {
    if (checkSequence(cheat.sequence)) {
      cheat.action();
      // Reset buffer so codes don't overlap
      pressedKeys.length = 0; 
    }
  });
});

function checkSequence(sequence) {
  // Check if the end of pressedKeys matches the sequence
  const pressedStr = pressedKeys.slice(-sequence.length).join(',');
  const sequenceStr = sequence.join(',');
  return pressedStr === sequenceStr;
}

// --- CHEAT EFFECTS ---

// 1. Villain Mode (Invert Colors)
let isVillain = false;
function toggleVillainMode() {
  isVillain = !isVillain;
  if (isVillain) {
    alert("🦹 VILLAIN MODE ACTIVATED!");
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    document.body.style.transition = "filter 1s ease";
  } else {
    alert("🦸 HERO MODE RESTORED!");
    document.body.style.filter = "none";
  }
}

// 2. God Mode (Golden Borders & Glow)
let isGod = false;
function toggleGodMode() {
  isGod = !isGod;
  const panels = document.querySelectorAll('.comic-panel, .comic-sidebar, .comic-card');
  
  if (isGod) {
    alert("⚡ GOD MODE ACTIVATED!");
    // Change borders to glowing gold
    panels.forEach(p => {
      p.style.borderColor = "#FFD700"; // Gold
      p.style.boxShadow = "0 0 20px #FFD700"; // Glow
    });
    document.body.style.backgroundImage = "none"; // Remove Spidey
    document.body.style.backgroundColor = "#fff"; // Holy white background
  } else {
    alert("⚡ MORTAL MODE RESTORED");
    panels.forEach(p => {
      p.style.borderColor = "";
      p.style.boxShadow = "";
    });
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "";
  }
}

// 3. Debug Mode (Wireframes)
let isDebug = false;
function toggleDebugMode() {
  isDebug = !isDebug;
  if (isDebug) {
    alert("🤖 DEBUG WIREFRAME ON");
    const style = document.createElement('style');
    style.id = 'debug-style';
    style.innerHTML = `* { outline: 1px solid red !important; background: rgba(255,0,0,0.05) !important; }`;
    document.head.appendChild(style);
  } else {
    alert("🤖 DEBUG OFF");
    const style = document.getElementById('debug-style');
    if (style) style.remove();
  }
}