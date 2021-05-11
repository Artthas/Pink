/* Menu */

var navMain = document.querySelector(".page-header__nav");
var navToggle = document.querySelector(".page-header__toggle");

navMain.classList.remove("page-header__nav--nojs");
navMain.classList.add("page-header__nav--closed");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("page-header__nav--closed")) {
    navMain.classList.remove("page-header__nav--closed");
    navMain.classList.add("page-header__nav--opened");
  } else {
    navMain.classList.add("page-header__nav--closed");
    navMain.classList.remove("page-header__nav--opened");
  }
});

/* Sending Form */

const popupFailure = document.querySelector(".pop-up__failure");
const popupSuccess = document.querySelector(".pop-up__success");
const popup = document.querySelector(".pop-up");
const popupClose = document.querySelector(".pop-up__button-close");
const form = document.querySelector(".form");

form.addEventListener("submit", function (evt) {
  popup.classList.add("pop-up__wrapper");
  popupSuccess.classList.add("pop-up--show");
});

buttonOpenWriteUs.addEventListener("click", function (evt) {
  popup.classList.remove("pop-up__wrapper");
  popupSuccess.classList.remove("pop-up--show");
  popupFailure.classList.remove("pop-up--show");
});

/* Choosing Range */

const publishLabel = document.querySelectorAll(".photos__publish-label");
const publishRange = document.querySelectorAll(".photos__publish-range-controls");

const buttonClick = function (item, button) {
  button.addEventListener("click", function () {
    document.querySelector(".photos__publish-range-controls--active").classList.remove("photos__publish-range-controls--active");
    document.querySelector(".photos__publish-label--active").classList.remove("photos__publish-label--active");
    button.classList.add("photos__publish-label--active");
    item.classList.add("photos__publish-range-controls--active");
  });
}

for (let i = 0; i < publishRange.length; i++) {
  buttonClick(publishRange[i], publishLabel[i]);
}
