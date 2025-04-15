
const heroTitleLetters = document.querySelectorAll('.hero__title-letter');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const speed = 1.5; // Adjust the speed to your liking
    const ypos = scrollY * speed;
    console.log(ypos);
})

window.addEventListener('scroll', () => {
    const underlines = document.querySelectorAll('.service-list .underline');
    console.log(underlines);

    underlines.forEach( (line, index) => {
        const height = window.innerHeight;
        let rect = line.getBoundingClientRect();
        console.log(rect.top + 50);
            console.log(height);
        if ( rect.top + 50  < height  && rect.top > 0) {
            line.classList.add('is-active');
        } else {
            line.classList.remove('is-active');
        }
    })
})
