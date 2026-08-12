document.addEventListener("DOMContentLoaded", () => {
	const cards = Array.from(document.querySelectorAll(".project-card"));
	const prevBtn = document.getElementById("prevBtn");
	const nextBtn = document.getElementById("nextBtn");

	let currentIndex = 0;

	function updateCarousel() {
		cards.forEach((card, index) => {
			// Offset relative to the current active card
			let offset = index - currentIndex;

			// Enable infinite loop wrapping calculation
			if (offset > Math.floor(cards.length / 2)) {
				offset -= cards.length;
			} else if (offset < -Math.floor(cards.length / 2)) {
				offset += cards.length;
			}

			if (offset === 0) {
				// Center Active Card
				card.classList.add("active");
				gsap.to(card, {
					x: 0,
					z: 0,
					rotationY: 0,
					scale: 1,
					opacity: 1,
					zIndex: 10,
					duration: 0.45,
					ease: "power2.out",
				});
			} else if (offset < 0) {
				// Cards shifted to the LEFT
				card.classList.remove("active");
				gsap.to(card, {
					x: offset * 220, // Horizontal offset spacing
					z: -200, // Depth push backward
					rotationY: 35, // Angle tilt inwards
					scale: 0.85,
					opacity: 0.5,
					zIndex: 10 + offset,
					duration: 0.45,
					ease: "power2.out",
				});
			} else {
				// Cards shifted to the RIGHT
				card.classList.remove("active");
				gsap.to(card, {
					x: offset * 220,
					z: -200,
					rotationY: -35, // Angle tilt inwards
					scale: 0.85,
					opacity: 0.5,
					zIndex: 10 - offset,
					duration: 0.45,
					ease: "power2.out",
				});
			}
		});
	}

	// Navigation Click Actions
	nextBtn.addEventListener("click", () => {
		currentIndex = (currentIndex + 1) % cards.length;
		updateCarousel();
	});

	prevBtn.addEventListener("click", () => {
		currentIndex = (currentIndex - 1 + cards.length) % cards.length;
		updateCarousel();
	});

	// Keyboard Arrow Navigation
	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowRight") {
			nextBtn.click();
		} else if (e.key === "ArrowLeft") {
			prevBtn.click();
		}
	});

	// Initial render
	updateCarousel();
});
