import {Observable} from 'rxjs'
import {request} from '../src/index'
import test from 'tape'

test('request returns Observable', t => {
  var result = request({url: 'http://foo.api.af'})
  t.true(result instanceof Observable)
  t.end()
})

test('request returns correct Observable', t => {
  const expectedKeys = ['_isScalar', 'request']
  const expectedValues = {
    _isScalar: false,
    request: {
      async: true,
      crossDomain: false,
      headers: {},
      method: 'GET',
      responseType: 'json',
      timeout: 0,
      url: 'http://foo.api.af',
      withCredentials: false
    }
  }
  const result = request({url: 'http://foo.api.af'})
  const keys = Object.keys(result)
  const values = JSON.parse(JSON.stringify(result)) // ugly deep clone
  t.deepEqual(keys, expectedKeys)
  t.deepEqual(values, expectedValues)
  t.end()
})
