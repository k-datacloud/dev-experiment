



//language switch
// const langSwitch = document.querySelectorAll('.c-lang-toggle');
// const introTitles = document.querySelectorAll('.intro__title');
// const introTexts = document.querySelectorAll('.intro__text');
// const showcaseTitles = document.querySelectorAll('.p-single-showcase__title--small');
// const showcaseTexts = document.querySelectorAll('.p-single-showcase__text');
// const showcaseListItems = document.querySelectorAll('.p-single-showcase-list__item');
// for (let index = 0; index < langSwitch.length; index++) {
//     langSwitch[index].addEventListener('click', () => {

//         if (langSwitch[index].textContent.trim() === 'ja') {
//             langSwitch[index].classList.add('active-lang');
//             langSwitch[index - 1].classList.remove('active-lang');
//             introTitles.forEach((title) => {
//                 title.textContent = title.getAttribute('data-jp');
//                 title.classList.add('intro__title--jp');
//             })
//             introTexts.forEach((text) => {
//                 text.textContent = text.getAttribute('data-jp');
//                 text.classList.add('intro__text--jp');
//             })
//             showcaseTitles.forEach((title) => {
//                 title.textContent = title.getAttribute('data-jp');
//                 title.classList.add('p-single-showcase__title--jp');
//             })
//             showcaseTexts.forEach((text) => {
//                 text.textContent = text.getAttribute('data-jp');
//                 text.classList.add('p-single-showcase__text--jp');
//             })
//             showcaseListItems.forEach((item) => {
//                 item.textContent = item.getAttribute('data-jp');
//                 item.classList.add('p-single-showcase-list__item--jp');
//             })
//         } else {
//             langSwitch[index].classList.add('active-lang');
//             langSwitch[index + 1].classList.remove('active-lang'); 
//             introTitles.forEach((title) => {
//                 title.textContent = title.getAttribute('data-en');
//                 title.classList.remove('intro__title--jp');
//             })
//             introTexts.forEach((text) => {
//                 text.textContent = text.getAttribute('data-en');
//                 text.classList.remove('intro__text--jp');
//             })
//             showcaseTexts.forEach((text) => {
//                 text.textContent = text.getAttribute('data-en');
//                 text.classList.remove('p-single-showcase__text--jp');
//             })
//             showcaseTitles.forEach((title) => {
//                 title.textContent = title.getAttribute('data-en');
//                 title.classList.remove('p-single-showcase__title--jp');
//             })
//             showcaseListItems.forEach((item) => {
//                 item.textContent = item.getAttribute('data-en');
//                 item.classList.remove('p-single-showcase-list__item--jp');
//             })
//         }

//     });
// }


// menuBtn

const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header__nav');
const menuBtnClose = document.querySelector('.menu-btn .menu-btn-label--close');
const menuBtnOpen = document.querySelector('.menu-btn .menu-btn-label--open');


menuBtn.addEventListener('click', () => {

    if (headerNav.classList.contains('is-active')) {
        headerNav.classList.remove('is-active');
        menuBtnClose.classList.remove('is-active');
        menuBtnOpen.classList.remove('is-active');
    } else {
        headerNav.classList.add('is-active');
        menuBtnClose.classList.add('is-active');
        menuBtnOpen.classList.add('is-active');
    }
})

window.addEventListener('load', () => {
    const footer = document.querySelector('.footer');
    const headerTitle = document.querySelectorAll('.header__title');
    const headerLink = document.querySelectorAll('.header__list-pc .header-list__link');
    const footerHeight = footer.getBoundingClientRect().top + window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= (footerHeight - 20)) {
            headerTitle.forEach((title) => {
                title.classList.remove('c-scroll-text--inactive');
                title.classList.add('c-scroll-text--active');
            })
            headerLink.forEach((link) => {
                link.classList.remove('c-scroll-text--inactive');
                link.classList.add('c-scroll-text--active');
            })
            menuBtnClose.classList.remove('c-scroll-text--inactive');
            menuBtnClose.classList.add('c-scroll-text--active');
        } else {
            headerTitle.forEach((title) => {
                title.classList.remove('c-scroll-text--active');
                title.classList.add('c-scroll-text--inactive');
            })
            headerLink.forEach((link) => {
                link.classList.remove('c-scroll-text--active');
                link.classList.add('c-scroll-text--inactive');
            })
            menuBtnClose.classList.remove('c-scroll-text--active');
            menuBtnClose.classList.add('c-scroll-text--inactive');
        }
    })

})

window.addEventListener('resize', () => {
    const footer = document.querySelector('.footer');
    const headerTitle = document.querySelectorAll('.header__title');
    const headerLink = document.querySelectorAll('.header__list-pc .header-list__link');
    const footerHeight = footer.getBoundingClientRect().top + window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= (footerHeight - 20)) {
            headerTitle.forEach((title) => {
                title.classList.remove('c-scroll-text--inactive');
                title.classList.add('c-scroll-text--active');
            })
            headerLink.forEach((link) => {
                link.classList.remove('c-scroll-text--inactive');
                link.classList.add('c-scroll-text--active');
            })
            menuBtnClose.classList.remove('c-scroll-text--inactive');
            menuBtnClose.classList.add('c-scroll-text--active');
        } else {
            headerTitle.forEach((title) => {
                title.classList.remove('c-scroll-text--active');
                title.classList.add('c-scroll-text--inactive');
            })
            headerLink.forEach((link) => {
                link.classList.remove('c-scroll-text--active');
                link.classList.add('c-scroll-text--inactive');
            })
            menuBtn.classList.remove('c-scroll-text--active');
            menuBtn.classList.add('c-scroll-text--inactive');
        }
    })

})

const langSwitch = document.querySelectorAll('.c-lang-toggle');
const introTitles = document.querySelectorAll('.intro__title');
const introTexts = document.querySelectorAll('.intro__text');
const showcaseTitles = document.querySelectorAll('.p-single-showcase__title--small');
const showcaseTexts = document.querySelectorAll('.p-single-showcase__text');
const showcaseListItems = document.querySelectorAll('.p-single-showcase-list__item');
for (let index = 0; index < langSwitch.length; index++) {
    langSwitch[index].addEventListener('click', () => {

        if (langSwitch[index].textContent.trim() === 'ja') {
            langSwitch[index].classList.add('active-lang');
            langSwitch[index - 1].classList.remove('active-lang');
            introTitles.forEach((title) => {
                title.textContent = title.getAttribute('data-jp');
                title.classList.add('intro__title--jp');
            })
            introTexts.forEach((text) => {
                text.textContent = text.getAttribute('data-jp');
                text.classList.add('intro__text--jp');
            })
            showcaseTitles.forEach((title) => {
                title.textContent = title.getAttribute('data-jp');
                title.classList.add('p-single-showcase__title--jp');
            })
            showcaseTexts.forEach((text) => {
                text.textContent = text.getAttribute('data-jp');
                text.classList.add('p-single-showcase__text--jp');
            })
            showcaseListItems.forEach((item) => {
                item.textContent = item.getAttribute('data-jp');
                item.classList.add('p-single-showcase-list__item--jp');
            })
        } else {
            langSwitch[index].classList.add('active-lang');
            langSwitch[index + 1].classList.remove('active-lang');
            introTitles.forEach((title) => {
                title.textContent = title.getAttribute('data-en');
                title.classList.remove('intro__title--jp');
            })
            introTexts.forEach((text) => {
                text.textContent = text.getAttribute('data-en');
                text.classList.remove('intro__text--jp');
            })
            showcaseTexts.forEach((text) => {
                text.textContent = text.getAttribute('data-en');
                text.classList.remove('p-single-showcase__text--jp');
            })
            showcaseTitles.forEach((title) => {
                title.textContent = title.getAttribute('data-en');
                title.classList.remove('p-single-showcase__title--jp');
            })
            showcaseListItems.forEach((item) => {
                item.textContent = item.getAttribute('data-en');
                item.classList.remove('p-single-showcase-list__item--jp');
            })
        }

    });
}

//hover
// const topLink = document.querySelectorAll('.p-top-showcase-list__info');
// const dividers = document .querySelectorAll('.p-top-showcase .divider');
// topLink.forEach((link, index) => {
//     link.addEventListener('mouseenter', () => {
//         dividers[index].classList.add('hover');
//     })
//     link.addEventListener('mouseleave', () => {
//         dividers[index].classList.remove('hover');
//     })
// })