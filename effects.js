window.addEventListener('scroll', function() {
    const image = document.getElementById('fixed-image');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Adjust the opacity based on scroll position
    if (scrollPosition < windowHeight) {
        image.style.opacity = 1 - (scrollPosition / windowHeight);
    } else {
        image.style.opacity = 0;
    }
});