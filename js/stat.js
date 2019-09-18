'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;
var COLUMN_GAP = 50;
var GISTOGRAM_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderHeadline = function (ctx, style, color, x, y, message) {
  ctx.fillStyle = color;
  ctx.font = style;
  ctx.fillText(message, x, y);
};

var renderData = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + TEXT_GAP + (BAR_WIDTH + COLUMN_GAP) * i, (CLOUD_Y + GAP + (TEXT_GAP * 2) + TEXT_GAP) + GISTOGRAM_HEIGHT - (GISTOGRAM_HEIGHT * times[i]) / maxTime);
    ctx.fillText(players[i], CLOUD_X + GAP + TEXT_GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    }
    ctx.fillRect(CLOUD_X + GAP + TEXT_GAP + (BAR_WIDTH + COLUMN_GAP) * i, (CLOUD_Y + GAP + (TEXT_GAP * 2) + GAP + TEXT_GAP) + GISTOGRAM_HEIGHT - (GISTOGRAM_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (GISTOGRAM_HEIGHT * times[i]) / maxTime);
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderHeadline(ctx, '16px PT Mono', 'rgba(0, 0, 0, 0.7)', CLOUD_X + TEXT_GAP, CLOUD_Y + GAP + TEXT_GAP, 'Ура вы победили!');
  renderHeadline(ctx, '16px PT Mono', 'rgba(0, 0, 0, 0.7)', CLOUD_X + TEXT_GAP, CLOUD_Y + GAP + TEXT_GAP * 2, 'Список результатов:');
  renderData(ctx, players, times);
};
