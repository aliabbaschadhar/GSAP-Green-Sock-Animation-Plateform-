function breakText() {
    const heading = document.querySelector("h1");
    const text = heading.textContent;

    const content = text.split("");

    let clutter = "";

    const halfVal = Math.floor(content.length / 2);

    content.forEach((word, idx) => {
        if (idx <= halfVal) {
            clutter += `<span class="firstHalf" >${word === " " ? "&nbsp;" : word}</span>`;
        } else {
            clutter += `<span class="secondHalf" >${word === " " ? "&nbsp;" : word}</span>`;
        }
    });

    heading.innerHTML = clutter;
}

breakText();

gsap.from(".firstHalf", {
    y: 80,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.15,
    ease: "power3.out"
});

gsap.from(".secondHalf", {
    y: 80,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: -0.15,
    ease: "power3.out"
});
