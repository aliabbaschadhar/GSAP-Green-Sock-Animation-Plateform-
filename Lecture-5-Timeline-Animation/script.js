let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i ");
console.log(cross)

// let tl = gsap.timeline({ paused: true }); //timeline will not start automatically until i do tl.play().

let tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.8,

})

tl.from("#full h4", {
    x: 100,
    duration: 0.7,
    stagger: 0.3,
    opacity: 0,
})

tl.from("#full i", {
    opacity: 0
})

tl.pause();

menu.addEventListener("click", () => {
    tl.play();
})

cross.addEventListener("click", () => {
    tl.reverse();
})