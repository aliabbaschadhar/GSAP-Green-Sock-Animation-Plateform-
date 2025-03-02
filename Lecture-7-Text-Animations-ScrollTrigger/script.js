// Function to animate the marque based on the direction
function animateMarque(direction) {
    if (direction === "forward") {
        // Animate the marque to move left
        gsap.to(".marque", {
            transform: "translateX(-200%)",
            duration: 5,
            repeat: -1,
            ease: "none",
        });
        gsap.to(".marque img", {
            rotate: 180
        });
    } else {
        // Animate the marque to move right
        gsap.to(".marque", {
            transform: "translateX(0%)",
            duration: 5,
            repeat: -1,
            ease: "none",
        });
        gsap.to(".marque img", {
            rotate: 0,
        });
    }
}

// Mouse wheel scrolling
window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
        animateMarque("forward");
    } else {
        animateMarque("backward");
    }
});

// Keyboard arrow keys
window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        animateMarque("forward");
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        animateMarque("backward");
    }
});

// Button clicks
document.querySelector("#forwardButton").addEventListener("click", function () {
    animateMarque("forward");
});

document.querySelector("#backwardButton").addEventListener("click", function () {
    animateMarque("backward");
});
