// fixed nav
let myNav = document.getElementById('myNav');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50) {
        myNav.classList.add('fixed-top');
        myNav.classList.add('bg-dark');
        myNav.style.zIndex ='100';
    }
    else {
        myNav.classList.remove('fixed-top');
        myNav.classList.remove('bg-dark');
    }
});

// hover

let addPortfolios = document.querySelectorAll('.addproduct');
let imgContainers = document.querySelectorAll('.img-container');

imgContainers.forEach((imgContainer, index) => {
    imgContainer.addEventListener('mouseover', () => {
        addPortfolios[index].classList.remove('d-none');
        addPortfolios[index].classList.add('d-flex');
    });

    imgContainer.addEventListener('mouseout', () => {
        addPortfolios[index].classList.add('d-none');
        addPortfolios[index].classList.remove('d-flex');
    });
});

// console.log(window.scrollY);

let nav1 = document.getElementById('nav1');
let nav2 = document.getElementById('nav2');
let nav3 = document.getElementById('nav3');
let nav4 = document.getElementById('nav4');
let nav5 = document.getElementById('nav5');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 500 &&  window.scrollY < 1100) {
        nav1.classList.remove('text-white');
        nav1.classList.add('text-warning');
    }
    else{
        nav1.classList.add('text-white');
        nav1.classList.remove('text-warning');
    }
});

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 1100 &&  window.scrollY < 2400) {
        nav2.classList.remove('text-white');
        nav2.classList.add('text-warning');
    }
    else{
        nav2.classList.add('text-white');
        nav2.classList.remove('text-warning');
    }
});

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 2400 &&  window.scrollY < 3900) {
        nav3.classList.remove('text-white');
        nav3.classList.add('text-warning');
    }
    else{
        nav3.classList.add('text-white');
        nav3.classList.remove('text-warning');
    }
});

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 3900 &&  window.scrollY < 4800) {
        nav4.classList.remove('text-white');
        nav4.classList.add('text-warning');
    }
    else{
        nav4.classList.add('text-white');
        nav4.classList.remove('text-warning');
    }
});
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 4800 ) {
        nav5.classList.remove('text-white');
        nav5.classList.add('text-warning');
    }
    else{
        nav5.classList.add('text-white');
        nav5.classList.remove('text-warning');
    }
});


// ****************************************************************

let mobileBar = document.getElementById('mobile-bar');
let mobileMenu = document.getElementById('mobile-menu');
let closeBtn = document.getElementById('closeBtn');


mobileBar.addEventListener('click', ()=>{
    mobileMenu.classList.remove('d-none');
    mobileMenu.classList.add('d-flex');
});

closeBtn.addEventListener('click', ()=> {
    mobileMenu.classList.add('d-none');
    mobileMenu.classList.remove('d-flex');
})