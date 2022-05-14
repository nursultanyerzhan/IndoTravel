const docEl = document.documentElement;

const fly = document.createElement('div');

fly.style.cssText = `
    pointer-events: none;
    position: fixed;
    width: 50px;
    height: 50px;
    right: 0;
    bottom: 0;
    background: url(img/airplane.svg) center/contain no-repeat;
`;

if (window.screen.width > 758) 
    document.body.append(fly);

const calcPositionFly = () => {
    const maxBottom = docEl.scrollWidth - fly.clientHeight;
    const maxScroll = docEl.scrollHeight - docEl.clientHeight;

    const percentScroll = (window.pageYOffset * 100) / maxScroll;
    
    const bottom = maxBottom * (percentScroll / 100);
    fly.style.bottom = bottom + 'px';
};

window.addEventListener('scroll', calcPositionFly);