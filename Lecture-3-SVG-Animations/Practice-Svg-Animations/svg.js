const svgElement = document.querySelector("#string");

let initialPath = "M 10 80 Q 500 10 950 80";
let finalPath = "M 10 80 Q 500 100 950 80";

svgElement.addEventListener("mousemove", (event) => {
    let limitedY = Math.max(0, Math.min(250, event.offsetY));
    initialPath = `M 10 80 Q ${event.offsetX} ${limitedY} 950 80`;

    gsap.to("#string svg path", {
        attr: { d: initialPath },
        duration: 0.3,
        ease: "power3.out",
    })
})

svgElement.addEventListener("mouseleave", () => {

    gsap.to("#string svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
    })
})