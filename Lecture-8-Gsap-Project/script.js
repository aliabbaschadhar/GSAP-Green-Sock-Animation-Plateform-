function page1Animation() {
    const tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        duration: 1,
        delay: 1,
        opacity: 0,
        stagger: 0.15,
    })

    tl.from(".center-part1 h1 ", {
        x: -300,
        opacity: 0,
        duration: 0.7,
    })

    tl.from(".center-part1 p ", {
        x: -150,
        opacity: 0,
        duration: 0.4,
    })

    tl.from(".center-part1 button", {
        x: -150,
        opacity: 0,
        duration: 0.3,
    })

    tl.from(".center-part2 img", {
        opacity: 0,
        // delay: -1, // this makes the image blink twice to prevent that we will use the delay in timeline
    }, "-=0.3")

    tl.from(".section-1-bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
    })
}

page1Animation();