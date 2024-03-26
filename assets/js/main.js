// Select the hamburger icon and the menu
const burgerIcon = document.querySelector('.burger-icon');
const navMenu = document.querySelector('.menu');

// Listen for click events on the burger icon
burgerIcon.addEventListener('click', function() {
    // Toggle the 'active' class on the menu
    navMenu.classList.toggle('active');
});
