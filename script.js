// Existing logo spin
gsap.set(".logo-img-cls", { transformPerspective: 1000 });
gsap.to(".logo-img-cls", {
  rotationY: 360,
  duration: 4,
  repeat: -1,
  ease: "none",
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("launch-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function(e) {
  if (e) e.preventDefault();
  modal.classList.add("show");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove("show");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
}
