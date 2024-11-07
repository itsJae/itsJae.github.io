gsap.utils.toArray('#timeline-korea ~ div').forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        markers: false,
    });
});
