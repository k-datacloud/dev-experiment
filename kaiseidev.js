const heroTitle = document.querySelectorAll('.hero__title-letter');
const dummyText = document.querySelector('.dummy p');

heroTitle.forEach ((title) => {
    title.addEventListener('animationend', () => {
        title.style.transform = 'translateY(0)';
    })
})

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const speed = 0.2; // Adjust the speed to your liking
    const ypos = scrollY * speed;
    console.log(ypos);
    
    
    heroTitle.forEach ((title) => {
        title.style.transform = `translateY(${ypos}px)`;
    })

    dummyText.style.fontSize = `calc(${ypos}/1440 * 100vw)`;
})