'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getRandomList = function (list) {
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    return list;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var generateWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    var randomWizards = getRandomList(wizards);

    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      fragment.appendChild(renderWizard(randomWizards[i]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.WizardsGenerator = {
    generateWizards: generateWizards,
  };
})();
