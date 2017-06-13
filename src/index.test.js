import {Observable} from 'rxjs'
import {request} from './index'

describe('universal-rxjs-ajax', () => {
  test('request returns Observable', () => {
    var result = request({url: 'http://foo.api.af'})
    expect(result instanceof Observable).toBeTruthy()
  })
  test('request returns correct Observable', () => {
    var result = request({url: 'http://foo.api.af'})
    expect(result).toMatchSnapshot()
  })
})
