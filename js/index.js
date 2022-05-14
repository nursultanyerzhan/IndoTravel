import { timer } from './timer.js';

const heroTimer = document.querySelector('.hero__timer');
const deadline = heroTimer.getAttribute('data-timer-deadline');

// timer(deadline);

const dt = new Date();
const gw = dt.toUTCString();

const greenwichDateTime = new Date(gw);

console.log(greenwichDateTime);