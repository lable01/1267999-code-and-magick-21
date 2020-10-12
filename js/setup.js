'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLOR = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)'];
/**
 * Поиск случайного значения
 * @param {*} wizardValue - наименование массива
 * @return случайное значение
 */
var randomValue = function (wizardValue) {
  var min = 0;
  var max = wizardValue.length - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: WIZARD_NAMES[randomValue(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAME[randomValue(WIZARD_SECOND_NAME)],
    coatColor: COAT_COLOR[randomValue(COAT_COLOR)],
    eyesColor: EYES_COLOR[randomValue(EYES_COLOR)]
  },
  {
    name: WIZARD_NAMES[randomValue(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAME[randomValue(WIZARD_SECOND_NAME)],
    coatColor: COAT_COLOR[randomValue(COAT_COLOR)],
    eyesColor: EYES_COLOR[randomValue(EYES_COLOR)]
  },
  {
    name: WIZARD_NAMES[randomValue(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAME[randomValue(WIZARD_SECOND_NAME)],
    coatColor: COAT_COLOR[randomValue(COAT_COLOR)],
    eyesColor: EYES_COLOR[randomValue(EYES_COLOR)]
  },
  {
    name: WIZARD_NAMES[randomValue(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAME[randomValue(WIZARD_SECOND_NAME)],
    coatColor: COAT_COLOR[randomValue(COAT_COLOR)],
    eyesColor: EYES_COLOR[randomValue(EYES_COLOR)]
  }
];
/**
 * Копирование (размножение) блоков (волшебников) в разметке с заполнением данных
 * @param {*} wizard - информация о волшебнике
 * @return блок волшебника с заполненными данными
 */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
