# universal-rxjs-ajax

[![Join the chat at https://gitter.im/mcmunder/universal-rxjs-ajax](https://badges.gitter.im/mcmunder/universal-rxjs-ajax.svg)](https://gitter.im/mcmunder/universal-rxjs-ajax?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

All credit goes to [jayphelps](https://github.com/jayphelps). Copied from his
suggestion made
[here](https://github.com/ReactiveX/rxjs/issues/2099#issuecomment-288140971).

`universal-rxjs-ajax` makes `Observable.ajax` available in `Node.js` by throwing
in [xhr2](https://github.com/pwnall/node-xhr2) when necessary.

## Usage

```js
import {request} from 'universal-rxjs-ajax'

request({url: 'http://some-api'})
  .subscribe(response => console.log(response))
```

## Examples

### redux-observable and jest

```js
// in file reduxModule.js:
import {request} from 'universal-rxjs-ajax'

export const GET_SOMETHING = 'GET_SOMETHING'
export const GOT_SOMETHING = 'GOT_SOMETHING'
export const LOG_ERROR = 'LOG_ERROR'

export const getSomething = () => ({
  type: GET_SOMETHING
})

export const gotSomething = response => ({
  type: GOT_SOMETHING,
  payload: response
})

export const logError = error => ({
  type: LOG_ERROR,
  payload: error,
  error: true
})

// export default reducer ...

export const getSomethingEpic = action$ => 
  action$.ofType(GET_SOMETHING)
    .mergeMap(action => 
      request({url: 'http://some-api/epic-stuff'})
        .map(({response}) => gotSomething(response))
        .catch(error => logError(error))
    )


// in file reduxModule.test.js:
/**
* @jest-environment node
*/

// jsdom does not handle the XMLHttpRequest correctly!
// The above docbloc changes the jest environment to node for tests in this 
// file only. jsdom happens to be the default setting for create-react-app so
// make sure to put in the docbloc when you are using it!

import nock from 'nock'
import {ActionObservable} from 'redux-observable'
import {getSomething, getSomethingEpic} from './reduxModule'

describe('reduxModule', () => {
  // make sure nock does not interfere with other tests...
  afterEach(() => {
    nock.cleanAll()
  })

  test('getSomethingEpic returns correct action with response', async () => {
    const action$ = ActionsObservable.of(getSomething())

    // intercept request with nock
    nock('http://some-api')
      .log(console.log) // log interceptions for debugging
      .get('/epic-stuff')
      .reply(200, {epicStuff: []})

    const response = await getSomethingEpic(action$)
      .toArray() // buffers all emitted actions until Epic completes
      .toPromise() // turn Observable back to Promise so it can be awaited

    expect(response).toMatchSnapshot() // snapshots are great!
  })

  test('getSomethingEpic returns correct action with error', async () => {
    const action$ = ActionsObservable.of(getSomething())

    nock('http://some-api')
      .log(console.log)
      .get('/epic-stuff')
      .reply(200, {epicStuff: []})

    const response = await getSomethingEpic(action$)
      .toArray()
      .toPromise() 

    expect(response).toMatchSnapshot()
  })
})
```

## Copyright and license

Copyright 2017, Matthias Munder.  
Licensed under the [MIT license](./LICENSE).

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
