
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero__title');
//     const heroTitleLetters = document.querySelectorAll('.hero__title-letter');
//     const rect1 = heroTitleLetters[0].getBoundingClientRect().right;
//     const rect2 = heroTitleLetters[1].getBoundingClientRect().left;
//     const gap = rect2 - rect1;
//     if ( gap > 0 ) {
//         heroTitle.style.gap = `${gap}px`;
//         heroTitle.style.justifyContent = 'flex-start';
//     }

//     window.addEventListener('scroll', () => {
//         const scrollY = window.scrollY;
//         heroTitle.style.gap = `${gap - scrollY}px`;
//         console.log(gap - scrollY);
        
//     })
// })

// window.addEventListener('resize', () => {
//     const heroTitleLetters = document.querySelectorAll('.hero__title-letter');
//     const rect1 = heroTitleLetters[0].getBoundingClientRect().right;
//     const rect2 = heroTitleLetters[1].getBoundingClientRect().left;
//     const gap = rect2 - rect1;
//     console.log(gap);

// })


window.addEventListener('load', () => {
    window.addEventListener('scroll', () => {
        const underlines = document.querySelectorAll('.service-list .underline');
        console.log(underlines);
    
        underlines.forEach( (line, index) => {
            const height = window.innerHeight;
            let rect = line.getBoundingClientRect();
            if ( rect.top + 20  < height  && rect.top > 0) {
                line.classList.add('is-active');
            } else {
                line.classList.remove('is-active');
            }
        })
    })
})

window.addEventListener('resize', () => {
    window.addEventListener('scroll', () => {
        const underlines = document.querySelectorAll('.service-list .underline');
        console.log(underlines);
    
        underlines.forEach( (line, index) => {
            const height = window.innerHeight;
            let rect = line.getBoundingClientRect();
            if ( rect.top + 20  < height  && rect.top > 0) {
                line.classList.add('is-active');
            } else {
                line.classList.remove('is-active');
            }
        })
    })
})

//accordion

const accordionItem = document.querySelectorAll('.accordion__item');
accordionItem.forEach((item) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < accordionItem.length; i++) {
            if (accordionItem[i] == item) {
                item.classList.add('is-active');
            } else {
                accordionItem[i].classList.remove('is-active');
            }
        }
    })
})