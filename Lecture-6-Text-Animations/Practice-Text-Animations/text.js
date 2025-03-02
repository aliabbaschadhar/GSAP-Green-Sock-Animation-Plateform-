function breakText() {
    const h1 = document.querySelector("h1");

    const text = h1.innerText;

    const content = text.split("")
    console.log(content)

    const halfVal = Math.floor(content.length / 2);
    console.log(halfVal)

    let clutter = "";

    content.forEach((word, index) => {
        const className = index <= halfVal ? "firstHalf" : "secondHalf";
        const wordOrSpace = word === " " ? "&nbsp;" : word;
        clutter += `<span class = ${className}> ${wordOrSpace} </span>`;
    })

    h1.innerHTML = clutter;
}
breakText()

gsap.from(".firstHalf", {
    y: 80,
    duration: 0.7,
    stagger: 0.15,
    delay: 0.5,
    opacity: 0,
    ease: "power3.out"
})

gsap.from(".secondHalf", {
    y: 80,
    duration: 0.7,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0,
    ease: "power3.out"
})