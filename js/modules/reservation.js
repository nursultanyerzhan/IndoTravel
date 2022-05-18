
const sendData = bodyData => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(bodyData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Ошибка, Что-то не так!');
    })
    .then((json) => alert(`отправка прошла успешно, ответ от сервера: ${json}`))
    .catch((error) => {
        alert(`Отправка не удалось, причина: ${error}`);
    });
};

const reservationForm = document.querySelector('.reservation__form');
reservationForm.addEventListener('submit', e => {
    e.preventDefault();
    const formBody = {
        dates: reservationForm.dates.value,
        people: reservationForm.people.value,
        reservationName: reservationForm.reservationName.value,
        reservationPhone: reservationForm.reservationPhone.value,
    };
    
    sendData(formBody);
});

const footerForm = document.querySelector('.footer__form');
footerForm.addEventListener('submit', e => {
    e.preventDefault();
    const formBody = {
        emailAddress: footerForm.emailAddress.value,
    };

    sendData(formBody);
});