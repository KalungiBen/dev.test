

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Screenshot Carousel
const carousel = document.querySelector('.screenshot-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
});

// Form Submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted');
    form.reset();
});

// Animations on Scroll
const fadeElems = document.querySelectorAll('.fade-in');

const fadeIn = (element) => {
    element.classList.add('fade-in');
};

const hideElement = (element) => {
    element.classList.remove('fade-in');
};

const handleScrollAnimation = () => {
    fadeElems.forEach(elem => {
        const elemTop = elem.getBoundingClientRect().top;
        const elemBottom = elem.getBoundingClientRect().bottom;
        if (elemTop < window.innerHeight && elemBottom > 0) {
            fadeIn(elem);
        } else {
            hideElement(elem);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);