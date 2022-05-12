
const getLikeTwoNumber = num => {
    console.log(num);
    if (num < 10)
        return '0' + num;
    return num;
};

const getDayDeclination = day => {
    if (day === 1 || day === 21)
        return 'день';

    const arr = [2, 3, 4, 22, 23, 24];
    if (arr.includes(day))
        return 'дня';

    if ((day > 4 && day < 21) || (day > 24 && day < 31))
        return 'дней';
};

const getHourDeclination = hour => {

    if (day === 1 || day === 21)
        return 'час';

    const arr = [2, 3, 4, 22, 23];
    if (arr.includes(day))
        return 'часа';

    if (day > 4 && day < 21)
        return 'часов';
};

const getMinuteDeclination = minute => {
    const array = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];

    if (minute % 10 === 1)
        return 'минута';
    else if (array.includes(minute))
        return 'минуты';
    else return 'минут';
    
};


export const timer = deadline => {
    const timerCountDays = document.querySelector('.timer__count_days');
    const timerCountHours = document.querySelector('.timer__count_hours');
    const timerCountMinutes = document.querySelector('.timer__count_minutes');

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime();
        const dateNow = Date.now();
        let dateRemaining = dateStop - dateNow;

        const oneMinute = 1000 * 60;
        const oneHour = oneMinute * 60;
        const oneDay = oneHour * 24;

        const days = Math.floor(dateRemaining / oneDay);
        dateRemaining = dateRemaining - days * oneDay;

        const hours = Math.floor(dateRemaining / oneHour);
        dateRemaining = dateRemaining - hours * oneHour;

        const minutes = Math.floor(dateRemaining / oneMinute);

        return { dateRemaining, minutes, hours, days }
    };

    const start = () => {
        const timer = getTimeRemaining();

        timerCountDays.textContent = getLikeTwoNumber(timer.days);
        timerCountHours.textContent = getLikeTwoNumber(timer.hours);
        timerCountMinutes.textContent = getLikeTwoNumber(timer.minutes);

        const intervalId = setTimeout(start, 1000 * 60);
    }

    start();
}


// 5-20, 25-30 дней
// 1,21,31 день
// 2,3,4, 22-24 дня

// 5-20 часов
// 1, 21 час
// 2-4, 22, 23 часа

// 1, 21, 31, 41, 51 минута
// 2-4, 22-24, 32-34, 42-44, 52-54 минуты
// 5-20, 25-30, 35-40, 45-50, 55-60 минут

