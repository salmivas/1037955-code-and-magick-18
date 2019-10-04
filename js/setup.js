'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUMBER = 4;
var KeyCode = {
  ESC_KEYCODE: 27,
  ENTER_KEYCODE: 13,
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupPlayer = setup.querySelector('.setup-player');
var setupWizardCoat = setupPlayer.querySelector('.wizard-coat');
var setWizardCoatColor = setupPlayer.querySelector('input:nth-last-child(2)');
var setupWizardEyes = setupPlayer.querySelector('.wizard-eyes');
var setWizardEyesColor = setupPlayer.querySelector('input:last-child');
var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');
var setFireballColor = setupWizardFireball.querySelector('input');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === KeyCode.ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  if (document.activeElement !== setupUserName) {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }
};

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

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KeyCode.ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KeyCode.ENTER_KEYCODE) {
    closePopup();
  }
});

setupWizardCoat.addEventListener('click', function () {
  var color = getRandom(COAT_COLORS);
  setupWizardCoat.style.fill = color;
  setWizardCoatColor.value = color;
});

setupWizardEyes.addEventListener('click', function () {
  var color = getRandom(EYES_COLORS);
  setupWizardEyes.style.fill = color;
  setWizardEyesColor.value = color;
});

setupWizardFireball.addEventListener('click', function () {
  var color = getRandom(FIREBALL_COLORS);
  setupWizardFireball.style.background = color;
  setFireballColor.value = color;
});
