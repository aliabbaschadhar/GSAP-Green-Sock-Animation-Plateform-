// Initial to final
gsap.to("#box1", {
    x: 500,
    duration: 2,
    delay: 2,
    rotate: 360,
    backgroundColor: "orange",
    borderRadius: "50%",
    // opacity: 0,
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
    // opacity: 0,
    scale: 2,
})