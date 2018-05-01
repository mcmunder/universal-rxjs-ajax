import {AjaxRequest, AjaxResponse} from 'rxjs/ajax'
import {Observable} from 'rxjs'

export function request(options: AjaxRequest): Observable<AjaxResponse>
