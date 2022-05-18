import { timer } from './modules/timer.js';
import './modules/acc.js';
import './modules/fly.js';
import './modules/tourForm.js';
import './modules/reservation.js';

const heroTimer = document.querySelector('.hero__timer');
const deadline = heroTimer.getAttribute('data-timer-deadline');

timer(deadline);