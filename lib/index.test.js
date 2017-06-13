'use strict';

var _rxjs = require('rxjs');

var _index = require('./index');

describe('universal-rxjs-ajax', function () {
  test('request returns Observable', function () {
    var result = (0, _index.request)({ url: 'http://foo.api.af' });
    expect(result instanceof _rxjs.Observable).toBeTruthy();
  });
  test('request returns correct Observable', function () {
    var result = (0, _index.request)({ url: 'http://foo.api.af' });
    expect(result).toMatchSnapshot();
  });
});
//# sourceMappingURL=index.test.js.map