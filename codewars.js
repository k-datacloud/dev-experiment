
//parallex effect scroll

// const boxs = document.querySelectorAll('.box');

// window.addEventListener('scroll', ()=> {
//     console.log(window.scrollY);
    
//     boxs[0].style.transform = `translateY(-${window.scrollY * 1}px)`;
//     boxs[1].style.transform = `translateY(-${window.scrollY * 0.4}px)`;
// })

const list = document.querySelectorAll('.header__list');
const links = document.querySelectorAll('.header__link');
const linksSpan = document.querySelectorAll('.header__link--sub');
for (let index = 0; index < links.length; index++) {    
    links[index].addEventListener('mouseover', () => {
        linksSpan[index].classList.add('active');
        links[index].classList.add('active');
    });

    links[index].addEventListener('mouseleave', () => {
        linksSpan[index].classList.remove('active');
    });
}

// window.addEventListener("scroll", function () {
//     const eyecatch = document.querySelector(".eyecatch");
//     const scrollY = window.scrollY;
//     const speed = 0.3; // Adjust the speed to your liking
//     const ypos = scrollY * speed;

//     eyecatch.style.backgroundPosition = `center calc(50% + ${ypos}px)`;  // スクロールに応じて背景位置を変更
// });

window.addEventListener('scroll', () => {
    const section = document.querySelector('.eyecatch img');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const height = window.innerHeight;

    if (rect.top < height && rect.bottom > 0) {
        let percent = (height - rect.top) / height;
        let move = percent * -100;
        section.style.transform = `translateY(${move}px)`;
    } else {
        console.log('error'); 
    }
    
});

window.addEventListener('scroll', () => {
    const section = document.querySelector('.eyecatch');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const height = window.innerHeight;

    if (rect.top < height && rect.bottom > 0) {
        let percent = (height - rect.top) / height;
        let move = percent * -150;
        section.style.backgroundPosition = `center ${move}px`;
    } else {
        console.log('error'); 
    }
    
});

const langSwitch = document.querySelectorAll('.c-lang-toggle');
const introTitles = document.querySelectorAll('.intro__title');
const introTexts = document.querySelectorAll('.intro__text');
const showcaseTitles = document.querySelectorAll('.p-single-showcase__title--small');
const showcaseTexts = document.querySelectorAll('.p-single-showcase__text');
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
        }

    });
}
