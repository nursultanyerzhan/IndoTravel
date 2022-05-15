const getData = async () => {
    return await fetch('https://bfs01.getcourse.ru/public/files/251231/195/cbe21783a515f15b9fc7c49f727da123.json?e=1652623199&s=3ct7FuL6qiIpmnE1kzGLgA');
};
const result = await getData();
const data = await result.json();

const tourForm = document.querySelector('.tour__form');
tourForm.addEventListener('submit', e => {
    e.preventDefault();
    const price = tourForm.dates.options[tourForm.dates.selectedIndex].getAttribute('data-price');
    alert(`Стоимость: ${tourForm.people.value * price} р.`);
});


data.forEach(item => {
    const optionDate = document.createElement('option');
    optionDate.value = item.date;
    optionDate.className = 'tour__option';
    optionDate.textContent = item.date;
    optionDate.setAttribute('data-price', item.price);
    tourForm.dates.append(optionDate);
});

const createPeopleOptions = (minCountPeople, maxCountPeople) => {
    for (let i = minCountPeople; i <= maxCountPeople; i++) {
        const optionPeople = document.createElement('option');
        optionPeople.value = i;
        optionPeople.className = 'tour__option';
        optionPeople.textContent = i;
        tourForm.people.append(optionPeople);
    }
};

tourForm.dates.addEventListener('change', () => {
    tourForm.people.textContent = '';
    const minPeopleCount = data.find(item => item.date === tourForm.dates.value)['min-people'];
    const maxPeopleCount = data.find(item => item.date === tourForm.dates.value)['max-people'];
    createPeopleOptions(minPeopleCount, maxPeopleCount);
});