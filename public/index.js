let navOpen = document.querySelector('.nav-menu-btn');
let navClose = document.querySelector('.menu-btn');
let navbarSmall = document.querySelector('.navbar-small');
let menuBG = document.querySelector('.menu-background');
let navItems = document.querySelectorAll('.nav-items a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        up.classList.add('show')
    } else {
        up.classList.remove('show')
    }
})

navOpen.addEventListener('click', () => {
    menuBG.classList.add('show');
});

navClose.addEventListener('click', () => {
    menuBG.classList.remove('show');
});

navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        menuBG.classList.remove('show');
    });
})
