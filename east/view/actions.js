/* Расположение: /Users/home/Documents/firma/east/view/actions.js */


import Lenis from 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis/+esm';

const lenis = new Lenis({
  smooth: true,
  lerp: 0.04,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
