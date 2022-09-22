import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {request} from './index'

type Repo = {
  name: string
}

describe('universal-rx-js-ajax', () => {
  test('request returns Observable', () => {
    const result = request({url: 'http://some-api.af'})
    expect(result instanceof Observable).toBeTruthy()
    expect(result).toMatchSnapshot()
  })

  test('README example works', () => {
    // config as accepted by Observable.ajax()
    const config = {
      url: 'https://api.github.com/orgs/Reactive-Extensions/repos',
      method: 'GET', // and so on...
    }

    request<Repo[]>(config)
      .pipe(map(({response}) => response.map((repo: Repo) => repo.name)))
      .subscribe((repoNames) => {
        expect(repoNames.includes('RxJS'))
      })
  })
})
