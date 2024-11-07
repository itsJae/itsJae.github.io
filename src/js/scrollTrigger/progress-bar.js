console.clear();

var startCount = 0,
    num = { var: startCount };

let tl = gsap.timeline().to(num, { var: 100, duration: 5, ease: 'none', onUpdate: changeNumber });

ScrollTrigger.create({
    animation: tl,
    scrub: true,
    markers: true,
});

function changeNumber() {
    numbers.innerHTML = num.var.toFixed();
    numbers.value = num.var.toFixed();
    numbers.width = num.var.toFixed() + 'px';
}
