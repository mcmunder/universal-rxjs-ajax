import {ajax, AjaxConfig, AjaxResponse} from 'rxjs/ajax'
import {Observable} from 'rxjs/internal/Observable'
import xhr2 from 'xhr2'

const XHR2 = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : xhr2

<<<<<<< HEAD
export const request = function request<T>(
  config: AjaxConfig
): Observable<AjaxResponse<T>> {
=======
export function request<T>(config: AjaxConfig): Observable<AjaxResponse<T>> {
>>>>>>> e6e5100 (project revamp)
  return ajax<T>({createXHR: () => new XHR2(), ...config})
}
