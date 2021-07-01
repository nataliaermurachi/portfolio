const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLink = document.querySelectorAll('.nav__link'),
    tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');


function removeMenu() {
    navMenu.classList.remove('show-menu');
    navToggle.classList.add('nav__toggle--show');
}

function addMenu() {
    navMenu.classList.add('show-menu');
    navToggle.classList.remove('nav__toggle--show');
}

/* SHOW MENU */
// validate if the toggle icon exists
if (navToggle) {
    navToggle.addEventListener('click', addMenu)
}
/* HIDE MENU */
// validate if the close icon exists
if (navClose) {
    navClose.addEventListener('click', removeMenu)
}

// REMOVE Menu on clicking links
navLink.forEach(link => link.addEventListener('click', removeMenu))

// QUALIFICATION TABS SWITCH
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})

// Initilize swiper 
let swiper = new Swiper(".swiper-container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});