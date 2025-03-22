
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
