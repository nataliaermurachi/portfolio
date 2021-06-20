const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLink = document.querySelectorAll('.nav__link');

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