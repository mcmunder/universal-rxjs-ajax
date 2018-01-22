'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ajax = require('rxjs/observable/dom/ajax');

var _xhr = require('xhr2');

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XHR2 = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : _xhr2.default;

var request = exports.request = function request(options) {
  return (0, _ajax.ajax)(_extends({ createXHR: function createXHR() {
      return new XHR2();
    } }, options));
};
//# sourceMappingURL=index.js.map