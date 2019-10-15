'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');
  var dialogHandle = setup.querySelector('.upload');
  var initialXSetupPosition = getComputedStyle(setup).top;
  var initialYSetupPosition = getComputedStyle(setup).left;
  var startCoords;
  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setup.style.top = (setup.offsetTop - shift.y) + 'px';
    setup.style.left = (setup.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (dragEvt) {
        dragEvt.preventDefault();
        dialogHandle.removeEventListener('click', onClickPreventDefault);
      };
      dialogHandle.addEventListener('click', onClickPreventDefault);
    }
  };

  var closePopup = function () {
    if (document.activeElement !== setupUserName) {
      setup.classList.add('hidden');
      setup.style.top = initialXSetupPosition;
      setup.style.left = initialYSetupPosition;
      document.removeEventListener('keydown', onPopupEscPress);
    }
  };

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
