const normalProgress = gsap.timeline({
    scrollTrigger: {
        scrub: true,
        trigger: '#horizontal-progress',
        start: 0,
        end: 'max',
    },
});

normalProgress.to('progress', {
    value: 100,
    ease: 'none',
});
