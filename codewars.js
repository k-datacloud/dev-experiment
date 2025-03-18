
//parallex effect scroll

const boxs = document.querySelectorAll('.box');

window.addEventListener('scroll', ()=> {
    console.log(window.scrollY);
    
    boxs[0].style.transform = `translateY(-${window.scrollY * 1}px)`;
    boxs[1].style.transform = `translateY(-${window.scrollY * 0.4}px)`;
})
