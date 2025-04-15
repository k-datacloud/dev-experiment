
const heroTitleLetters = document.querySelectorAll('.hero__title-letter');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const speed = 1.5; // Adjust the speed to your liking
    const ypos = scrollY * speed;
    console.log(ypos);
    
    
    // heroTitle.forEach ((title) => {
    //     title.style.transform = `translateY(${ypos}px)`;
    // })

    // if (scrollY > 10) {
    //     heroTitle.style.justifyContent = 'flex-start';
    //     heroTitleLetters.forEach((letter, index) => {
    //         letter.style.transform = `translateY(-${ypos}px)`;
    //         letter.style.fontSize = `${Math.max(1.5 - (scrollY / 1000), 0.5)}em`;
    //     });
    // } else {
    //     heroTitle.style.justifyContent = 'space-between';
    // }
})

const underline = document.querySelectorAll('.service-list .underline');
console.log(underline);
