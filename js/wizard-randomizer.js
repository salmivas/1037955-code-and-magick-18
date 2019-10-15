'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_NUMBER = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getRandomWizard = function () {
    return {
      name: window.setup.getRandom(NAMES) + ' ' + window.setup.getRandom(SURNAMES),
      coatColor: window.setup.getRandom(window.setup.COAT_COLORS),
      eyeColor: window.setup.getRandom(window.setup.EYES_COLORS)
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

  var generateWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  generateWizards();
})();
