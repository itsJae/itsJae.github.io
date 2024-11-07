import createGlobe from 'https://cdn.skypack.dev/cobe';

let phi = 0;
let canvas = document.getElementById('cobe');

const globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    scale: 1,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [1, 1, 1],
    markerColor: [0.2, 0.231, 0.737],
    glowColor: [0.2, 0.231, 0.737],
    offset: [0, 0],
    markers: [
        { location: [49.246292, -123.116226], size: 0.15 },
        { location: [37.5326, 127.024612], size: 0.15 },
        { location: [1.29027, 103.851959], size: 0.15 },
    ],
    onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
    },
});
