window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Parallax effect for background image
    const parallaxBg = document.querySelector('.parallax-bg');
    parallaxBg.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

    // Parallax effect for fixed image
    const fixedImage = document.getElementById('fixed-image');
    fixedImage.style.transform = `translateY(${scrollPosition * 0.3}px) translateX(-50%)`;
});