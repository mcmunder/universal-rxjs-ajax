import {ajax} from 'rxjs/ajax'
import xhr2 from 'xhr2'

const XHR2 = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : xhr2

export const request = function request(options) {
  return ajax({createXHR: () => new XHR2(), ...options})
}
