import {ajax, AjaxConfig, AjaxResponse} from 'rxjs/ajax'
import {Observable} from 'rxjs/internal/Observable'
import xhr2 from 'xhr2'

const XHR2 = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : xhr2

export function request<T>(config: AjaxConfig): Observable<AjaxResponse<T>> {
  return ajax<T>({createXHR: () => new XHR2(), ...config})
}
