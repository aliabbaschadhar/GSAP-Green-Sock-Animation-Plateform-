const menu = document.querySelector("#nav i");
const cross = document.querySelector("#full i");

const tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.8,
})

tl.from("#full h4", {
    x: 100,
    stagger: 0.3,
    duration: 0.7,
    opacity: 0,
})

tl.from("#full i", {
    opacity: 0,
})

tl.pause();

menu.addEventListener("click", (event) => {
    tl.play();
})

cross.addEventListener("click", (event) => {
    tl.to("#full", {
        right: "-35%",
        duration: 0.8,
    })
})