gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duration: 1.5,
    rotate: 360,
})


gsap.from("#page2 #box", {
    scale: 0,
    delay: 1,
    duration: 1.5,
    rotate: 360,
    // scrollTrigger: "#page2 #box"
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
})

gsap.from("#page3 #box", {
    scale: 0,
    delay: 1,
    duration: 1.5,
    rotate: 360,
})

// Some advance way 

gsap.from("#page2 h1", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%",
    }
})

gsap.from("#page2 h2", {
    opacity: 0, // Starts the element with full transparency (invisible)
    duration: 2, // Animation lasts for 2 seconds
    x: -500, // Starts the element 500 pixels to the right of its final position
    y: -200, // Starts the element 200 pixels above its final position
    rotation: 360, // Rotates the element 360 degrees from its starting position
    scale: 0.5, // Starts with the element half its final size
    scrollTrigger: {
        trigger: "#page2 h2", // Element that triggers the animation
        scroller: "body", // The container that is scrolled to trigger the animation
        markers: true, // Displays markers to visualize the start and end of the animation
        start: "top 50%", // Starts the animation when the top of the trigger element hits 50% of the viewport
        toggleActions: "restart pause reset", // Defines actions at the start, on leave, on enter back, and on leave back
        scrub: true // Smoothly scrubs through the animation as the user scrolls
    }
})
