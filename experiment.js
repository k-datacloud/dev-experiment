//parallex effect scroll

// window.addEventListener('scroll', () => {
//     const section = document.querySelector('.eyecatch img');
//     if (!section) return;
//     const rect = section.getBoundingClientRect();
//     const height = window.innerHeight;

//     if (rect.top < height && rect.bottom > 0) {
//         let percent = (height - rect.top) / height;
//         let move = percent * -100;
//         section.style.transform = `translateY(${move}px)`;
//     } else {
//         console.log('error'); 
//     }
    
// });

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

// window.addEventListener('scroll', () => {
//     let scrollAmount = window.scrollY;
//     textAbusolute.textContent = Math.round(contactElementHeight);
//     textRelative.textContent = Math.round(scrollAmount);
//     console.log(contactElementHeight);
//     console.log(scrollAmount);

//     if ( scrollAmount >= ( contactElementHeight - 170 ) ) {
//         textAbusolute.classList.add('active');
//         textRelative.classList.add('active');
//         contactElement.classList.add('active');
//     } else {
//         console.log("false");
        
//         textAbusolute.classList.remove('active');
//         textRelative.classList.remove('active');
//         contactElement.classList.remove('active');
//     }
// })


window.addEventListener('scroll', () => {
    const scrollJudgeText = document.querySelector('.scroll-judge p');
    let rect = scrollJudgeText.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if ( rect.top + 200 < windowHeight && rect.top > 0 ) {
        console.log("element is visible");
        console.log(rect.top);
        
    } else {
        console.log("element is not visible");
        console.log(rect.top);
    }
})

window.addEventListener('scroll', () => {
    const bodyWrapper = document.querySelector('.body-wrapper');
    let scrollY = window.scrollY;
    const speed = 0.1;
bodyWrapper.style.transform = `translateY(${scrollY * speed}px)`
    console.log(scrollY);
})