// File menu.js
'use strict';

(function () {
  var headerMenu = document.querySelector(".page-header__top");
  var menu = document.querySelector(".main-nav");
  var buttonMenu = document.querySelector(".page-header__toggle");

  headerMenu.classList.remove("no-js");

  buttonMenu.addEventListener('click', function () {
    menu.classList.toggle('menu-open')
    buttonMenu.classList.toggle('page-header__toggle--close')
  })
})();
