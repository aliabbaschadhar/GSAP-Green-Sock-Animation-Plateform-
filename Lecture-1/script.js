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
    repeat: 5,
    yoyo: true,
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


// **********************Text animations********************************//

gsap.from("h1", {
    y: 20,
    opacity: 0,
    duration: 2,
    delay: 1,
    color: "blue",
    // stagger: -1,
    stagger: 0.3, // Everything will work one by one ==> if there are more than one persons of same and we want to move them one by one then we will use stagger.
    repeat: 1,
})


// **********************************GSAP TIMELINES ************************//