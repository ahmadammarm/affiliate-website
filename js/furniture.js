const preloader = document.querySelector(".preloader");

window.addEventListener('load', () => {
    preloader.remove();
})

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
