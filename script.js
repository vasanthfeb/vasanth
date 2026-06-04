const bg = document.querySelector('.bg-image');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll',()=>{

    let blurValue = 0;

    sections.forEach(section=>{

        const rect = section.getBoundingClientRect();

        if(rect.top <= window.innerHeight/2){
            blurValue = section.dataset.blur;
        }

    });

    bg.style.filter = `blur(${blurValue}px) scale(1.08)`;

});