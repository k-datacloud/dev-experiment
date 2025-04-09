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

//scroll
const contactElements = document.querySelectorAll('.divider');
const textAbusolutes = document.querySelectorAll('.scrollcount__text--absolute-num');
const textRelatives = document.querySelectorAll('.scrollamount');


    

        window.addEventListener('scroll', () => {
            contactElements.forEach((contactElement, index) => {
                const contactElementHeight = contactElement.getBoundingClientRect().top + window.scrollY;
                textAbusolutes[index].textContent = Math.round(contactElementHeight);
                textRelatives[index].textContent = Math.round(window.scrollY);
            })
        })

window.addEventListener('scroll', () => {
    let scrollAmount = window.scrollY;
    textAbusolute.textContent = Math.round(contactElementHeight);
    textRelative.textContent = Math.round(scrollAmount);
    console.log(contactElementHeight);
    console.log(scrollAmount);

    if ( scrollAmount >= ( contactElementHeight - 170 ) ) {
        textAbusolute.classList.add('active');
        textRelative.classList.add('active');
        contactElement.classList.add('active');
    } else {
        console.log("false");
        
        textAbusolute.classList.remove('active');
        textRelative.classList.remove('active');
        contactElement.classList.remove('active');
    }
})


//follow scroll
window.addEventListener('scroll', () => {
    const followElements = document.querySelectorAll('.follow-scroll-card__item');
    followElements.forEach( (followElement, index) => {
        const followElementHeight = followElement.getBoundingClientRect().top + window.scrollY;
         if ( window.scrollY >= followElementHeight ) {
            followElement.classList.add('is-active');
        } 
    })
})