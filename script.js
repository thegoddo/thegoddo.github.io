const sections = {
  about: `<h2>About Me</h2><p>This is the about section. Add your info here!</p>`,
  portfolio: `<h2>Portfolio</h2><p>Showcase your projects here.</p>`,
  experience: `<h2>Experience</h2><p>List your work experience here.</p>`,
  contact: `<h2>Contact Me</h2><p>How people can reach you.</p>`,
};

document.querySelectorAll(".comic-link").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.getAttribute("data-section");
    document.getElementById("comic-content").innerHTML =
      sections[section] || "";
  });
});

// Load default section
document.getElementById("comic-content").innerHTML = sections.about;
