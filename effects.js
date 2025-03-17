window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Parallax effect for background image
    const parallaxBg = document.querySelector('.parallax-bg');
    parallaxBg.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

    // Parallax effect for game-title-text
    const fixedImage = document.getElementById('game-title-text');
    fixedImage.style.transform = `translateY(${scrollPosition * 0.3}px) translateX(-50%)`;

    // Show/hide game-title-text based on scroll position
    if (scrollPosition > windowHeight) {
        fixedImage.style.opacity = '0';
    } else {
        fixedImage.style.opacity = '1';
    }
});

window.addEventListener('scroll', function() {
    const titleText = document.getElementById('title-text');
    const scrollPosition = window.scrollY;
    titleText.style.transform = `translateY(${scrollPosition / 2}px)`;

    // Show/hide title-text based on scroll position
    if (scrollPosition > window.innerHeight) {
        titleText.style.opacity = '0';
    } else {
        titleText.style.opacity = '1';
    }
});