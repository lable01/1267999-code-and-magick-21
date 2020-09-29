'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BOX_SHADOW = 'rgba(0, 0, 0, 0.3)';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CONTENT_X = 150;
var TEXT_Y = 260;
var GAP = 10;
var CONTENT_WIDTH = 40;
var CONTENT_GAP = 30;
var COLUMN_GAP = 50;
var BAR_WIDTH = 150;
var TITLE_X = 120;
var TITLE_Y = 40;
var TITLE_GAP = 20;
var NUMBER_GAP = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, BOX_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText(
      'Ура вы победили!',
      TITLE_X,
      TITLE_Y
  );

  ctx.fillText(
      'Список результатов:',
      TITLE_X,
      TITLE_Y + TITLE_GAP
  );

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(
        names[i],
        CONTENT_X + (CONTENT_WIDTH + COLUMN_GAP) * i,
        TEXT_Y
    );
  }

  ctx.translate(0, CLOUD_HEIGHT);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  for (var n = 0; n < names.length; n++) {
    ctx.fillRect(
        CONTENT_GAP,
        CONTENT_X + (CONTENT_WIDTH + COLUMN_GAP) * n,
        (BAR_WIDTH * times[n]) / maxTime,
        CONTENT_WIDTH
    );
  }

  ctx.translate(0, CLOUD_HEIGHT);
  ctx.rotate(-Math.PI / 2);
  ctx.translate(0, CLOUD_HEIGHT);
  ctx.rotate(-Math.PI / 2);
  ctx.translate(0, CLOUD_HEIGHT);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = '#000';

  for (var j = 0; j < times.length; j++) {
    ctx.fillText(
        Math.round(times[j]),
        CONTENT_X + (CONTENT_WIDTH + COLUMN_GAP) * j,
        CLOUD_HEIGHT - (BAR_WIDTH * times[j]) / maxTime - NUMBER_GAP
    );
  }
};
