'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rxjs = require('rxjs');

var XHR2 = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : require('xhr2');

var request = exports.request = function request(options) {
  return _rxjs.Observable.ajax(_extends({ createXHR: function createXHR() {
      return new XHR2();
    } }, options));
};
//# sourceMappingURL=index.js.map