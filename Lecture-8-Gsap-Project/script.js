gsap.registerPlugin(ScrollTrigger);

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

function page2Animation() {
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 0%",
            // scrub: 2 means that when user scrolls the animation will be
            // updated every 2 pixels of scroll. This means that if the user
            // scrolls 2 pixels then the animation will move forward by 2px
            // scrub: 2,
        }
    });

    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5,
    })
    //Line1
    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "bapa1")

    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1,
    }, "bapa1")

    // The "bapa1" in this GSAP timeline code is what's called a position parameter or label. It's a timing reference point in the timeline that allows you to synchronize multiple animations.

    // In GSAP(GreenSock Animation Platform), when you add an animation to a timeline using methods like .from(), .to(), or.fromTo(), the last parameter can be a string that serves as a position marker.

    // Here's what it's doing:

    // It positions this specific animation to start at the label called "bapa1"
    // If other animations in the timeline also use "bapa1" as their position parameter, they will all start at the same time
    // If this is the first time "bapa1" is used, it creates this label in the timeline
    // This technique is particularly useful for choreographing complex animations where multiple elements need to start, overlap, or sequence in specific ways.

    // Line2
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "waqarBapaKaMureed");

    tl2.from(".elem.line2.right", {
        opacity: 0,
        duration: 1,
        x: 300,
    }, "waqarBapaKaMureed");
}
page2Animation();