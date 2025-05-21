const menu_bar = document.getElementById('menu-bar');
const navbar = document.querySelector('.navbar');

menu_bar.addEventListener('click', (event) => {
    navbar.classList.toggle('active');
    event.target.classList.toggle('fa-xmark');
});