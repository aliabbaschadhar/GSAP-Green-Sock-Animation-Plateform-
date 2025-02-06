let initalPath = `M 10 100 Q 500 100 990 100`

let finalPath = `M 10 100 Q 500 100 990 100`

const string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
    initalPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    // To change the attribute we can do this in gsap

    gsap.to("#string svg path", {
        attr: { d: initalPath },
        duration: 0.3,
        ease: "power3.out",
    })

})

string.addEventListener("mouseleave", () => {
    gsap.to("#string svg path", {
        // Here we are changing the attribute "d" of the path element to finalPath
        // "d" attribute is used to define the shape of the SVG element
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
    })
})