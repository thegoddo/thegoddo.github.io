if (window.innerWidth < 768) {
  // Check if the user is already on the mobile page to avoid redirect loops
  if (!window.location.pathname.includes("mobile.html")) {
    window.location.replace("mobile.html");
  }
}
