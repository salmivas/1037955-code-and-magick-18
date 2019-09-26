'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var getRandom = function (list) {
  return list[Math.floor((Math.random() * list.length))];
};

var getRandomWizard = function () {
  return {
    name: getRandom(NAMES) + ' ' + getRandom(SURNAMES),
    coatColor: getRandom(COAT_COLORS),
    eyeColor: getRandom(EYES_COLORS)
  };
};

var getWizards = function (requiredNumber) {
  var wizardsList = [];
  for (var i = 0; i < requiredNumber; i++) {
    wizardsList.push(getRandomWizard());
  }
  return wizardsList;
};

var wizards = getWizards(WIZARDS_NUMBER);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

var init = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  document.querySelector('.setup-similar').classList.remove('hidden');
};

init();
