'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEvents = addEvents;

var _passiveOption = require('./passiveOption.js');

function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && (!preventScrolling || preventScrolling === 'auto') ? _passiveOption.passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}