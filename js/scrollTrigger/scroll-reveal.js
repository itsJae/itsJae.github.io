gsap.utils.toArray('.reveal').forEach((item) => {
    ScrollTrigger.create({
        trigger: item,
        start: 'top 90%',
        end: 'bottom 20%',
        onEnter: () => {
            animate(item);
        },
    });
    item.style.opacity = '0';
});

const animate = (item) => {
    let x = 0;
    let y = 100;

    if (item.classList.contains('reveal_LTR')) {
        x = -100;
        y = 0;
    } else if (item.classList.contains('reveal_BTT')) {
        x = 0;
        y = 100;
    } else if (item.classList.contains('reveal_TTB')) {
        x = 0;
        y = -100;
    } else {
        x = 100;
        y = 0;
    }

    gsap.fromTo(
        item,
        { autoAlpha: 0, x: 0, y: 100 },
        { autoAlpha: 1, x: 0, y: 0, duration: 2, overwrite: 'auto', ease: 'expo' }
    );
};
