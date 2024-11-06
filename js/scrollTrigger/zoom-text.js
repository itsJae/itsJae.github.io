const ani = gsap.timeline();
ani.to('#workspace-title', { scale: 60, duration: 2, autoAlpha: 1 }).to('#workspace-title', { autoAlpha: 0 });

ScrollTrigger.create({
    animation: ani,
    trigger: '#workspace-title',
    start: 'center center',
    end: '+=4000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false,
});
