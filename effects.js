window.addEventListener('scroll', function () {
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

// Generic toggle function for menus
function setupMenuToggle(toggleId, menuId, logoSelector) {
    const menuToggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    const logo = document.querySelector(logoSelector);

    if (!menuToggle || !menu) {
        console.error(`Menu toggle or menu not found: toggleId=${toggleId}, menuId=${menuId}`);
        return;
    }

    menuToggle.addEventListener('click', () => {
        // Ensure this only applies to mobile view
        if (window.innerWidth <= 768) {
            menu.classList.toggle('hidden');
            if (logo) {
                logo.classList.toggle('hidden'); // Toggle the logo's visibility if it exists
            }
        }
    });
}

// Setup header menu toggle
setupMenuToggle('menu-toggle', 'menu', '.absolute.left-1\\/2.transform.-translate-x-1\\/2');

// Setup footer menu toggle
setupMenuToggle('footer-menu-toggle', 'footer-menu', '.footer-logo'); // Adjust the logo selector if needed

document.addEventListener('DOMContentLoaded', function () {
    const footerMenuToggle = document.getElementById('footer-menu-toggle');
    const footerMenu = document.getElementById('footer-menu');
    const footerLogo = document.querySelector('.footer-logo');

    if (footerMenuToggle && footerMenu) {
        footerMenuToggle.addEventListener('click', function () {
            footerMenu.classList.toggle('hidden'); // Alternar visibilidad del menú
            footerLogo.classList.toggle('hidden'); // Alternar visibilidad del logo
        });
    }
});

// Toggle footer menu visibility on small screens
const footerMenuToggle = document.getElementById('footer-menu-toggle');
const footerMenu = document.getElementById('footer-menu');

footerMenuToggle.addEventListener('click', () => {
    footerMenu.classList.toggle('hidden');
});