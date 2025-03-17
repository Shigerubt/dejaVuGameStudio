window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Inverted parallax effect for background image
    const parallaxBg = document.querySelector('.parallax-bg');
    parallaxBg.style.backgroundPositionY = `${-scrollPosition * 0.5}px`;

    // Inverted parallax effect for game-title-text
    const fixedImage = document.getElementById('game-title-text');
    fixedImage.style.transform = `translateY(${-scrollPosition * 0.5}px)`;

    // Show/hide game-title-text based on scroll position
    if (scrollPosition > windowHeight) {
        fixedImage.style.opacity = '0';
    } else {
        fixedImage.style.opacity = '1';
    }
});