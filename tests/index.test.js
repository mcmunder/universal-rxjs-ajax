import {Observable} from 'rxjs'
import {request} from '../src/index'
import test from 'tape'
import {map} from 'rxjs/operators'

test('request returns Observable', t => {
  var result = request({url: 'http://some-api.af'})
  t.true(result instanceof Observable)
  t.end()
})

test('request returns correct Observable', t => {
  const expectedKeys = ['_isScalar', 'request']
  const expectedRequestKeys = [
    'async',
    'createXHR', // removed by ugly deep clone
    'crossDomain',
    'withCredentials',
    'headers',
    'method',
    'responseType',
    'timeout',
    'url'
  ]
  const expectedValues = {
    _isScalar: false,
    request: {
      async: true,
      crossDomain: true,
      headers: {},
      method: 'GET',
      responseType: 'json',
      timeout: 0,
      url: 'http://some-api.af',
      withCredentials: false
    }
  }
  const result = request({url: 'http://some-api.af'})
  const keys = Object.keys(result)
  const requestKeys = Object.keys(result.request)
  const values = JSON.parse(JSON.stringify(result)) // ugly deep clone

  t.deepEqual(keys, expectedKeys)
  t.deepEqual(requestKeys, expectedRequestKeys)
  t.deepEqual(values, expectedValues)
  t.end()
})

test('README example works', t => {
  request({
    url: 'https://api.github.com/orgs/Reactive-Extensions/repos'
  })
    .pipe(map(({response}) => response.map(r => r.name)))
    .subscribe(repoNames => {
      t.ok(repoNames.includes('RxJS'))
      t.end()
    })
})
