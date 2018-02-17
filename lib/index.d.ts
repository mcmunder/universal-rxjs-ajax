import {AjaxRequest, AjaxResponse} from 'rxjs/observable/dom/AjaxObservable'
import {Observable} from 'rxjs/Observable'

export function request(options: AjaxRequest): Observable<AjaxResponse>
