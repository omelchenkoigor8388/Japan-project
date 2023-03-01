const closeMenuBtn = document.querySelector('.close-menu-btn');
const menuToggle = document.querySelector('.menu-toggle input');
const menuBlock = document.querySelector('.menu-block');

menuToggle.addEventListener('click', () => {
  menuBlock.classList.toggle('show-menu');
});

closeMenuBtn.addEventListener('click', () => {
    menuBlock.classList.remove('show-menu');
    menuToggle.checked = false;
});
