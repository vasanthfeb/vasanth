const bg = document.querySelector('.bg-image');

window.addEventListener('scroll', () => {

    const scrollTop = window.pageYOffset;

    const maxBlur = 12;

    const blur = Math.min(scrollTop / 250, maxBlur);

    bg.style.filter = `
        blur(${blur}px)
        brightness(${100-(blur*2)}%)
    `;

    bg.style.transform = `
        scale(${1.1 + blur/120})
    `;

});