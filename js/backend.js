'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var DATA_URL = 'https://js.dump.academy/code-and-magick/data';
  var SUCCESS_STATUS = 200;

  var load = function (onLoad, onError) {
    var xhr = request(onLoad, onError);

    xhr.open('GET', DATA_URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = request(onLoad, onError);

    xhr.open('POST', URL);
    xhr.send(data);
  };

  var request = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_STATUS) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения!');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    return xhr;
  };

  window.backend = {
    load: load,
    save: save,
  };
})();
