const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLink = document.querySelectorAll('.nav__link'),
    tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]'),
    contactForm = document.querySelector('.contact__form');

let fName = document.getElementById('fName'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');

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

// form functionality
// form functionality
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        fName: fName.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Message sent');
            fName.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
        } else {
            alert('Something went wrong!')
        }
    }
    xhr.send(JSON.stringify(formData))
})