// File modal.js
'use strict';

(function () {
  var modalTemplate = document.querySelector('#modal__buy')
    .content
    .querySelector('.modal');
  var modal = modalTemplate.cloneNode(true);

  var successTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  var success = successTemplate.cloneNode(true);

  var buyTour = document.querySelectorAll('.buy__tour');

  function addModalHandler() {
    var modalBuy = document.body.querySelector('main .modal');
    var overlayArea = modalBuy.querySelector('.overlay')
    var closeButton = modalBuy.querySelector('.close');

    function removeListener() {
      overlayArea.removeEventListener('click', removeModalOverlayClick);
      closeButton.removeEventListener('click', removeModalClick);
      document.removeEventListener('keydown', removeModalPressEscape);
    }

    function addListener() {
      document.body.style.overflow = 'hidden';
      overlayArea.addEventListener('click', removeModalOverlayClick);
      closeButton.addEventListener('click', removeModalClick);
      document.addEventListener('keydown', removeModalPressEscape);
    }

    function removeModal() {
      document.body.style.overflow = 'auto';
      if (modalBuy.parentNode) {
        modalBuy.parentNode.removeChild(modalBuy);
      }
    }

    function removeModalClick() {
      removeModal();
      removeListener();
    };

    function removeModalOverlayClick(evt) {
      if (evt.target === overlayArea) {
        removeModal();
        removeListener();
      }
    };

    function removeModalPressEscape(evt) {
      if (evt.key === 'Escape') {
        removeModal();
        removeListener();
      }
    };
    addListener();
  }

  Object.keys(buyTour).forEach(function (btn) {
    buyTour[btn].addEventListener('click', function () {
      document.body.querySelector('main').prepend(modal);

      var phoneInput = document.querySelector('.modal__input-field--number');
      phoneInput.focus();

      addModalHandler();

      var modalForm = document.querySelector('.modal__data-block');
      var inputData = modalForm.querySelectorAll('.input-field');

      modalForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        var arrData = [];
        Object.keys(inputData).forEach(function (el) {
          arrData.push(inputData[el].value);
        })
        localStorage.setItem('personData', JSON.stringify(arrData));
        var modal = document.body.querySelector('main .modal');
        modal.parentNode.removeChild(modal);
        document.body.querySelector('main').prepend(success);
        addModalHandler();
      });
    });
  });

  var questionForm = document.querySelector('.question__form');
  var questionInput = questionForm.querySelectorAll('.question__input-field');

  questionForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var arrData = [];
    Object.keys(questionInput).forEach(function (el) {
      arrData.push(questionInput[el].value);
    })
    localStorage.setItem('personData', JSON.stringify(arrData));
    document.body.querySelector('main').prepend(success);
    addModalHandler();
  });
})();
