'use strict';

// основное меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    document.body.style.overflow = 'hidden';
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    document.body.style.overflow = 'visible';
  }
});

// плавный скролл к якорям
var anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      document.body.style.overflow = 'visible';
    }

    var blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// запись полей формы в Local Storage
var blockForm = document.querySelector('.slogan__wrapper-form');
var userName = blockForm.querySelector('[name=user-name]');
var userPhone = blockForm.querySelector('[name=user-telephone]');
var form = blockForm.querySelector('form');

form.addEventListener('submit', function (evt) {
  if (!userName.value || !userPhone.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('userPhone', userPhone.value);
  }
});
