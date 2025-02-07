const main = document.querySelector("#main")

const cursor = document.querySelector("#cursor");

//Easy custom cursor
main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })
})