const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === '' || navLinks.style.display === 'none') {
        navLinks.style.display = 'block';
    } else {
        navLinks.style.display = 'none';
    }
});