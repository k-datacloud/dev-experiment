
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

const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach((item) => {
    const answer = item.querySelector('.accordion__answer');
    console.log(item.querySelector('.accordion__question'));
  
    item.querySelector('.accordion__question').addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
  
      if (isOpen) {
        item.classList.remove('is-open');
        answer.style.height = 0;
        answer.style.marginTop = 0;
      } else {
        item.classList.add('is-open');
        answer.style.height = answer.scrollHeight + 'px';
        if (innerWidth < 768) {
          answer.style.marginTop = 'calc(16/16 * 1rem)';
        }
        else {
          answer.style.marginTop = 'calc(24/16 * 1rem)';
        }
      }
    });
});

  
  