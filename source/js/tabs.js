// File tabs.js
'use strict';

(function () {
  var countryAboutButton = document.querySelectorAll('.country-about__btn');
  var countryInfoBlock = document.querySelectorAll('.country-about__info-block');
  var visitPlacesButton = document.querySelectorAll('.visit-places__button');

  function addClassHidden () {
    Object.keys(countryInfoBlock).forEach(function(el) {
      countryInfoBlock[el].classList.add('country-about__info-block-hidden');
    })
  }

  function tabsChange(arr, method) {
    Object.keys(arr).forEach(function(el) {
      arr[el].addEventListener(method, function () {
        addClassHidden ()
        countryInfoBlock[el].classList.remove('country-about__info-block-hidden');
      })
    })
  }

  tabsChange(countryAboutButton, 'change');
  tabsChange(visitPlacesButton, 'click');
})();
