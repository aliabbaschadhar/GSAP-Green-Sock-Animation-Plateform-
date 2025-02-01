// **********************Text animations********************************//

gsap.to("h1", {
    color: "red",
    duration: 2,
    delay: 1,
})

// ****************************Box Animations**************************//
// Initial to final
gsap.to("#box1", {
    x: 500,
    duration: 2,
    delay: 2,
    rotate: 360,
    backgroundColor: "orange",
    borderRadius: "50%",
    // opacity: 0, // Opacity from one to zero
    scale: 2,
})

// final from initail
gsap.from("#box2", {
    x: 500,
    y: 500,
    duration: 2,
    delay: 2,
    rotate: 360,
    backgroundColor: "orange",
    borderRadius: "50%",
    opacity: 1,
    scale: 2,
})
