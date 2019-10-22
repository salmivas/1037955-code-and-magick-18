'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupPlayer = document.querySelector('.setup-player');
  var setupWizardCoat = setupPlayer.querySelector('.wizard-coat');
  var setWizardCoatColor = setupPlayer.querySelector('input:nth-last-child(2)');
  var setupWizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var setWizardEyesColor = setupPlayer.querySelector('input:last-child');
  var setupWizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var setFireballColor = setupWizardFireball.querySelector('input');

  var getRandomItem = function (list) {
    return list[Math.floor((Math.random() * list.length))];
  };

  setupWizardCoat.addEventListener('click', function () {
    var color = getRandomItem(COAT_COLORS);
    setupWizardCoat.style.fill = color;
    setWizardCoatColor.value = color;
  });

  setupWizardEyes.addEventListener('click', function () {
    var color = getRandomItem(EYES_COLORS);
    setupWizardEyes.style.fill = color;
    setWizardEyesColor.value = color;
  });

  setupWizardFireball.addEventListener('click', function () {
    var color = getRandomItem(FIREBALL_COLORS);
    setupWizardFireball.style.background = color;
    setFireballColor.value = color;
  });

  window.setup = {
    getRandomItem: getRandomItem,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
  };
})();
