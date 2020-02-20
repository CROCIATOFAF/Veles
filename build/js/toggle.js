'use strict';

var closeAllAccordeons = function () {
  accordeonElements.forEach(function (element) {
    element.classList.add('closed');
    element.classList.remove('opened');
  });
};

var toggleAccordeon = function (element) {
  element.classList.toggle('closed');
  element.classList.toggle('opened');
};

var onAccorderonHeadClick = function (evt) {
  var accordeonElement = evt.currentTarget.closest('.js-accordeon');

  if (accordeonElement.classList.contains('closed')) {
    closeAllAccordeons();
  }

  toggleAccordeon(accordeonElement);
};

var initAccordeon = function (element) {
  var head = element.querySelector('.js-accordeon-head');

  head.addEventListener('click', onAccorderonHeadClick);
  element.classList.add('closed');
};

var accordeonElements = document.querySelectorAll('.js-accordeon');

accordeonElements.forEach(function (element) {
  initAccordeon(element);
});
