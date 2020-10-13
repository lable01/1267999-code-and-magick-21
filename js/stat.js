'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BOX_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_X_START = 100;
var CLOUD_Y_START = 10;
var CONTENT_COLUMN_Y_START = 150;
var NAME_Y_START = 260;
var CLOUD_GAP = 10;
var COLUMN_WIDTH = 40;
var COLUMN_Y = 240;
var COLUMN_GAP = 50;
var MAX_COLUMN_HEIGHT = 150;
var TITLE_X_START = 120;
var TITLE_Y_START = 40;
var TITLE_GAP = 20;

/**
 * Рисует облако
 * @param {number} x - координата начала облака по Х
 * @param {number} y - координата начала облака по Y
 * @param {string} color - цвет облака
 */

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

/**
 * Возвращает максимальное число
 * @param {array} arr - массив из чисел
 * @return {number} - максимальное число 
 */
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

/** Рисует статистику игры
 * @param {array} names - массив имен игроков
 * @param {array} times - массив времени прохождения уровня соответствующим игроком
 */

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X_START + CLOUD_GAP, CLOUD_Y_START + CLOUD_GAP, BOX_SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X_START, CLOUD_Y_START, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText(
      'Ура вы победили!',
      TITLE_X_START,
      TITLE_Y_START
  );

  ctx.fillText(
      'Список результатов:',
      TITLE_X_START,
      TITLE_Y_START + TITLE_GAP
  );

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(
        names[i],
        CONTENT_COLUMN_Y_START + (COLUMN_WIDTH + COLUMN_GAP) * i,
        NAME_Y_START
    );
    
    ctx.fillText(
        Math.round(times[i]),
        150 + (COLUMN_WIDTH + COLUMN_GAP) * i,
        CLOUD_HEIGHT - (MAX_COLUMN_HEIGHT * times[i]) / maxTime - TITLE_Y_START,
    );

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,50%,50%)';
    };

    ctx.fillRect(
        150 + (COLUMN_WIDTH + COLUMN_GAP) * i,
        COLUMN_Y,
        COLUMN_WIDTH,
        - (MAX_COLUMN_HEIGHT * times[i]) / maxTime,
    )
  }
};
