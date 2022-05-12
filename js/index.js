import { timer } from './timer.js';

const heroTimer = document.querySelector('.hero__timer');
const deadline = heroTimer.getAttribute('data-timer-deadline');

const getDeadline = (deadline) => {
    const splittedDate = deadline.split('/');
    const date = new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0], 0, 0);
};



timer('2022/05/25');