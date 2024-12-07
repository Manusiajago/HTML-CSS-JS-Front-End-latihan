const navBar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    const posisiWindow = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", posisiWindow);

    sideBar.classList.remove('menu-active');
})

const menuBar = document.querySelector('.ri-menu-line');
const sideBar = document.querySelector('.navigation');

menuBar.addEventListener('click', function () {
    sideBar.classList.toggle('menu-active');
})

const iconClose = document.querySelector('.ri-close-line');

iconClose.addEventListener('click', function () {
    sideBar.classList.toggle('menu-active')
})