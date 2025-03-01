let cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");
const imageDiv = document.querySelector("#image");

imageDiv.addEventListener("mouseenter", (event) => {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 2,
    })
})

imageDiv.addEventListener("mouseleave", (event) => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
    })
})

main.addEventListener("mousemove", (event) => {
    gsap.to(cursor, {
        x: event.x,
        y: event.y,
        duration: 1,
        ease: "back.out"
    })
})
