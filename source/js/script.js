'use strict';

//основное меню
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

//плавный скролл к якорям
const anchors = document.querySelectorAll("a[href*=\"#\"]")

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute("href").substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

//запись полей формы в Local Storage
var blockForm = document.querySelector(".slogan__wrapper-form");
var userName = blockForm.querySelector("[name=user-name]");
var userPhone = blockForm.querySelector("[name=user-telephone]");
var form = blockForm.querySelector("form");

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userPhone.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все поля формы");
  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userPhone", userPhone.value);
  }
});
