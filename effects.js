window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Inverted parallax effect for background image
    const parallaxBg = document.querySelector('.parallax-bg');
    parallaxBg.style.backgroundPositionY = `${-scrollPosition * 0.5}px`;

    // Adjust the scroll speed here (e.g., 0.2 for slower, 0.8 for faster)
    const scrollSpeed = 0.3;

    // Inverted parallax effect for game-title-text
    const fixedImage = document.getElementById('game-title-text');
    fixedImage.style.transform = `translateY(${-scrollPosition * scrollSpeed}px)`;

    // Adjust the opacity based on scroll position
    const fadeThreshold = windowHeight / 2; // Adjust this value as needed

    if (scrollPosition > fadeThreshold) {
        // Fade out
        fixedImage.style.opacity = 1 - (scrollPosition - fadeThreshold) / fadeThreshold;
        if (fixedImage.style.opacity < 0) {
            fixedImage.style.opacity = 0;
        }
    } else {
        // Appear by default and fade out as scrolling down
        fixedImage.style.opacity = 1 - (scrollPosition / fadeThreshold);
        if (fixedImage.style.opacity < 0) {
            fixedImage.style.opacity = 0;
        }
    }
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const logo = document.querySelector('.absolute.left-1\\/2.transform.-translate-x-1\\/2'); // Select the logo

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    logo.classList.toggle('hidden'); // Toggle the logo's visibility
});