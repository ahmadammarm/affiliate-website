// Loading
const preloader = document.querySelector(".preloader");

function removePreloader() {
    preloader.remove();
}

window.addEventListener('load', () => {
    setTimeout(removePreloader, 3000);
});

// Carousel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    rightArrow.addEventListener('click', function () {
        carousel.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    });

    leftArrow.addEventListener('click', function () {
        carousel.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    });
});
