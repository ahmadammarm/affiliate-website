const preloader = document.querySelector(".preloader");

// Function to remove the preloader after 2 seconds
function removePreloader() {
    preloader.remove();
}

// Wait for the window to load
window.addEventListener('load', () => {
    // Set a timeout of 2000 milliseconds (2 seconds) before removing the preloader
    setTimeout(removePreloader, 3000);
});

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
