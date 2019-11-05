'use strict'

jQuery(document).ready(function() {
  initTabs()
  initSlider();
  initBurger();

});

function initTabs() {
  $('.tabs').tabslet({
    mouseevent: 'click',
    attribute: 'href',
    animation: true
  });
}

function initSlider() {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1
  });
}

function initBurger() {
  var burgerBtn = document.querySelectorAll('.burger-menu');
  
  burgerBtn = burgerBtn[0];
  
  burgerBtn.addEventListener('click', function() {
    event.preventDefault();
    document.body.classList.toggle('nav-active');
  });
}

