"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = void 0;

var _ajax = require("rxjs/ajax");

var _xhr = _interopRequireDefault(require("xhr2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var XHR2 = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : _xhr.default;

var request = function request(options) {
  return (0, _ajax.ajax)(_objectSpread({
    createXHR: function createXHR() {
      return new XHR2();
    }
  }, options));
};

exports.request = request;
//# sourceMappingURL=index.js.map