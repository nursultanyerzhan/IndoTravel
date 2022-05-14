const items = document.querySelectorAll('.travel__item');
const buttons = document.querySelectorAll('.travel__item-title');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        for (let i = 0; i < items.length; i++) {
            if (index === i) {
                items[i].classList.toggle('travel__item_active');
            } else {
                items[i].classList.remove('travel__item_active');
            }
        }
    });
});


const body = document.querySelector('body');

body.addEventListener('click', ({ target }) => {
    const nav = document.querySelector('nav');

    if (target.classList.contains('header__menu-button'))
        nav.classList.add('header__menu_active');
    else
        nav.classList.remove('header__menu_active');
});
