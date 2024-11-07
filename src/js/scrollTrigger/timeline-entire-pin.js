const ani = gsap.timeline();
ani.from('#timeline-korea', { autoAlpha: 0, duration: 2, y: 50 }, '+=1')
    .from('#timeline-canada', { autoAlpha: 0, duration: 2, y: 50 }, '+=1')
    .from('#timeline-singapore', { autoAlpha: 0, duration: 2, y: 50 }, '+=1')
    .from('#timeline-roka', { autoAlpha: 0, duration: 2, y: 50 }, '+=1');
let panels = gsap.utils.toArray('.timeline-component');
let tops = panels.map((panel) => ScrollTrigger.create({ trigger: panel, start: 'top top' }));

ScrollTrigger.create({
    animation: ani,
    trigger: '#timeline',
    start: 'top top',
    end: '+=3500',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    snap: 0.25,
    // markers: true,
});
