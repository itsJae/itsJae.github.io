// /src/js/scripts/globe.js
import createGlobe from 'https://cdn.skypack.dev/cobe'

let phi = 0

const globe = createGlobe(document.getElementById('cobe'), {
  devicePixelRatio: 2,
  width: 1000,
  height: 1000,
  phi: 0,
  theta: 0,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [0.1, 0.8, 1],
  glowColor: [0.1, 0.8, 1],
  markers: [
    { location: [-33.8688, 151.2093], size: 0.05 }, // 시드니 (UNSW!)
  ],
  onRender: (state) => {
    state.phi = phi
    phi += 0.005
  }
})