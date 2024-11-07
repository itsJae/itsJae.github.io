const textElements = gsap.utils.toArray('#timeline-text-wrap .b_txt');
textElements.forEach((text) => {
    gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: text,
            start: 'top 90%',
            end: 'center 50%',
            scrub: true,
        },
    });
});
