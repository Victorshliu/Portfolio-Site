// Navigation Toggle
const navToggle = document.querySelector('#navBtn');
const menu = document.querySelector('.menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  menu.classList.toggle('active');
});