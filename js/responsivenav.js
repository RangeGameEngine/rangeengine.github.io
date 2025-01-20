const toggleButton = document.querySelector('.togglebutton');
const navbarLinks = document.querySelector('.headerlinks');
let isActive = false;

$(document).on('scroll', () => {
  if ($(window).scrollTop() > 150) {
    $('.header').addClass('activeh');
  }
  else if ($(window).scrollTop() <= 150 && !isActive) {
    $('.header').removeClass('activeh');
  }
});

toggleButton.addEventListener('click', () => {
  isActive = !isActive;
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
  if (isActive) {
    $('.header').addClass('activeh');
  } else if ($(window).scrollTop() <= 80) {
    $('.header').removeClass('activeh');
  }
});