let links = gsap.utils.toArray('.anchor');

links.forEach((link) => {
    let elementId = link.getAttribute('href');
    let element = document.querySelector(link.getAttribute('href')),
        linkST = ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            markers: false,
        }),
        sectionHeight = linkST.end - linkST.start;
    switch (elementId) {
        case '#about':
            ScrollTrigger.create({
                trigger: element,
                start: 'top top',
                end: '+=5509',
                onToggle: (self) => setActive(link),
            });
            break;
        case '#stack':
            ScrollTrigger.create({
                trigger: element,
                start: '+=3500',
                end: '+=1012',
                onToggle: (self) => setActive(link),
            });
            break;
        case '#workspace':
            ScrollTrigger.create({
                trigger: element,
                start: '+=3500',
                end: '+=1359',
                onToggle: (self) => setActive(link),
            });
            break;
        case '#contact':
            ScrollTrigger.create({
                trigger: element,
                start: '+=3500',
                end: '+=9999',
                onToggle: (self) => setActive(link),
            });
            break;
        default:
            ScrollTrigger.create({
                trigger: element,
                start: 'top top',
                end: 'bottom top',
                onToggle: (self) => setActive(link),
            });
            break;
    }

    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (element.id === 'stack' || element.id === 'workspace' || element.id === 'contact') {
            gsap.to(window, {
                duration: 1,
                scrollTo: linkST.start + 3501,
                overwrite: 'auto',
            });
        } else {
            gsap.to(window, {
                duration: 1,
                scrollTo: linkST.start + 1,
                overwrite: 'auto',
            });
        }
    });
});

function setActive(link) {
    link.classList.toggle('active');
}
