// Set perspective on the logo so 3D depth renders properly
gsap.set(".logo-img-cls", { transformPerspective: 1000 });

// Continuous Y-axis spin animation
gsap.to(".logo-img-cls", {
  rotationY: 360,
  duration: 4,
  repeat: -1, // Infinite loop
  ease: "none", // Smooth, constant rotation
});
