
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
const accordionIcons = document.querySelectorAll('.accordion__icon');
accordionItems.forEach((item, index) => {
    const answer = item.querySelector('.accordion__answer');
  
    item.querySelector('.accordion__question').addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
  
      if (isOpen) {
        item.classList.remove('is-open');
        accordionIcons[index].src = accordionIcons[index].dataset.close;
        answer.style.height = 0;
        answer.style.marginTop = 0;
      } else {
        item.classList.add('is-open');
        answer.style.height = answer.scrollHeight + 'px';
        accordionIcons[index].src = accordionIcons[index].dataset.open;
        if (innerWidth < 768) {
          answer.style.marginTop = 'calc(16/16 * 1rem)';
        }
        else {
          answer.style.marginTop = 'calc(24/16 * 1rem)';
        }
      }
    });
});


//footer
window.addEventListener('load', () => {
    const footer = document.querySelector('.footer');
    const footerContentTop = document.querySelector('.footer__logo');
    const originalHeight = footerContentTop.getBoundingClientRect().height;
    // footerContentTop.style.height = `0px`;
    console.log(originalHeight);
    window.addEventListener('scroll', () => {
        if ( footer.getBoundingClientRect().bottom - 100 < window.innerHeight ) {
            // footerContentTop.style.height = `${originalHeight}px`;
            footerContentTop.classList.add('is-active');
            console.log('footer logo is in view');
        } else {
            console.log('footer logo is not in view');
            // contentTop.classList.remove('is-active');
        }
    })
})

//menubtn
const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header__nav');
menuBtn.addEventListener('click', () => {
    if (headerNav.classList.contains('is-active')) {
        headerNav.classList.remove('is-active');
    } else {
        headerNav.classList.add('is-active');
    }
})

document.querySelectorAll('.header-list__link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        console.log(targetId, targetElement);
        

        if (!targetElement) return;

        const sectionTop = ( targetElement.getBoundingClientRect().top - 120 ) + window.scrollY;
        const duration = 800;
        smoothScroll(sectionTop, duration);
        headerNav.classList.remove('is-active');
    })
});

function smoothScroll(target, duration) {
    const startPosition = window.scrollY;
    const distance = target - startPosition;
    let start = null;

    function animation(currentTime) {
        if (!start) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = Math.min(1, timeElapsed / duration);

        const easeInOutQuad = (t) => {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };


        window.scrollTo(0, startPosition + distance * easeInOutQuad(run));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    window.requestAnimationFrame(animation);
}

window.addEventListener('scroll', () => {
    const section = document.querySelector('.service');
    console.log(section.getBoundingClientRect().top);
    
})
  