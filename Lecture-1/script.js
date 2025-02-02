
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

const tl = gsap.timeline();

tl.to("#box3", {
    x: 700,
    duration: 1.5,
    delay: 1,
    opacity: 0,
    rotate: 360,
    repeat: 3,
    yoyo: true,
    borderRadius: "50%",
})

tl.to("#box4", {
    x: 700,
    duration: 1.5,
    opacity: 0,
    rotate: 360,
    repeat: 3,
    yoyo: true,
    borderRadius: "50%",
})

tl.to("#box5", {
    x: 700,
    duration: 1.5,
    opacity: 0,
    rotate: 360,
    repeat: 1,
    yoyo: true,
    borderRadius: "50%",
})

//*************************************************Timeline Advance *********************** */

const timeline = gsap.timeline();

timeline.from("h2", {
    y: -20,
    duration: 0.7,
    delay: 0.5,
    opacity: 0 // As we know that gsap.from is from final to initial so opacity will go from zero to one
})

timeline.from("h4", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3
})

timeline.from(".time", {
    // y: -50,
    y: 20,
    duration: 0.5,
    opacity: 0,
    scale: 0.2
})