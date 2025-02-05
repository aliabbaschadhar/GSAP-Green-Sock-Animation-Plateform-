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
        // toggleActions: "restart pause reset",
        // scrub: true,
    }
})

gsap.from("#page2 h2", {
    opacity: 0, // Starts the element with full transparency (invisible)
    duration: 2, // Animation lasts for 2 seconds
    x: -500, // Starts the element 500 pixels to the right of its final position
    y: -200, // Starts the element 200 pixels above its final position
    rotation: 360, // Rotates the element 360 degrees from its starting position
    scale: 0.2, // Starts with the element half its final size
    scrollTrigger: {
        trigger: "#page2 h2", // Element that triggers the animation
        scroller: "body", // The container that is scrolled to trigger the animation
        markers: true, // Displays markers to visualize the start and end of the animation
        start: "top 50%", // Starts the animation when the top of the trigger element hits 50% of the viewport
        // toggleActions: "restart pause reset", // Defines actions at the start, on leave, on enter back, and on leave back
        // scrub: true // Smoothly scrubs through the animation as the user scrolls
    }
})

gsap.from("#page2 #box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    rotate: 760,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        // scrub: true,
        scrub: 2, // Normal but we can give from 1 to 5 in numbers ==> 1 to 5 is the degree of smoothness  ==> recommended 2
        pin: true, // Pins the element to the viewport, so it doesn't move as you scroll

    }
})

// Learning about pin

gsap.to("#pin2 h1", {
    transform: "translateX(-2000%)",
    scrollTrigger: {
        // trigger: "#pin2 h1",
        trigger: "#pin2", // When we will use pin then we will trigger the parent and its a rule to handle animations gracefully,
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -1000%", // This specifies that the animation will end when the top of the pinned element has scrolled 1000% past the top of the viewport. Possible use cases include creating a long scrolling effect where content moves continuously out of view or simulating an extended animation as the user scrolls.
        pin: true,
        scrub: 2, // We have made it so much slow that user can read it,
    }
})