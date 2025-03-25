
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
