const main = document.querySelector("#main")

const cursor = document.querySelector("#cursor");

const imageDiv = document.querySelector("#image");

imageDiv.addEventListener("mouseenter", () => {
    cursor.innerHTML = "View more"
    gsap.to(cursor, {
        scale: 2,
    })
})

imageDiv.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
    })
})

//Easy custom cursor
main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })
})

