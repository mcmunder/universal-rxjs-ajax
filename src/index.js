import {Observable} from 'rxjs'

const XHR2 = typeof XMLHttpRequest !== 'undefined'
  ? XMLHttpRequest
  : require('xhr2')

export const request = function request(options) {
  return Observable.ajax({createXHR: () => new XHR2(), ...options})
}
