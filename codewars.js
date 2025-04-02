



//language switch
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


// menuBtn

const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
    
    if (headerNav.classList.contains('menu-close')) {
        headerNav.classList.remove('menu-close');
        headerNav.classList.add('menu-active');
        menuBtn.textContent = menuBtn.getAttribute('data-close');
        menuBtn.classList.add('menu-btn--close');
    } else {
        headerNav.classList.remove('menu-active');
        headerNav.classList.add('menu-close');
        menuBtn.textContent = menuBtn.getAttribute('data-open');
        menuBtn.classList.remove('menu-btn--close');
    }
})

window.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer');
    const headerTitle = document.querySelectorAll('.header__title');
    const footerHeight = footer.getBoundingClientRect().top + window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= ( footerHeight - 20 ) ) {
            headerTitle.forEach((title) => {
                title.classList.remove('c-scroll-text--inactive');
                title.classList.add('c-scroll-text--active');
                console.log(window.scrollY);
                console.log(footerHeight);
                
                console.log("きたよ");
                
            })
        } else {
            headerTitle.forEach((title) => {
                title.classList.remove('c-scroll-text--active');
                title.classList.add('c-scroll-text--inactive');
                console.log("まだだよ");
                
            })
        }
    })
    
})