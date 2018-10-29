# universal-rxjs-ajax

[![Build Status](https://travis-ci.org/mcmunder/universal-rxjs-ajax.svg?branch=master)](https://travis-ci.org/mcmunder/universal-rxjs-ajax) [![npm version](https://badge.fury.io/js/universal-rxjs-ajax.svg)](https://badge.fury.io/js/universal-rxjs-ajax) [![Join the chat at https://gitter.im/mcmunder/universal-rxjs-ajax](https://badges.gitter.im/mcmunder/universal-rxjs-ajax.svg)](https://gitter.im/mcmunder/universal-rxjs-ajax?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

All credit goes to [jayphelps](https://github.com/jayphelps). Copied from his
suggestion made
[here](https://github.com/ReactiveX/rxjs/issues/2099#issuecomment-288140971).

`universal-rxjs-ajax` makes `Observable.ajax` available in `Node.js` by throwing
in [xhr2](https://github.com/pwnall/node-xhr2) when necessary.

## Usage

```js
const {map} = require('rxjs/operators')
const {request} = require('universal-rxjs-ajax')

// settings as accepted by Observable.ajax()
const settings = {
  url: 'https://api.github.com/orgs/Reactive-Extensions/repos',
  method: 'GET' // and so on...
}

request(settings)
  .pipe(map(({response}) => response.map(r => r.name)))
  .subscribe(repoNames => console.log(repoNames))
```

## Try it yourself

https://runkit.com/mcmunder/universal-rxjs-ajax-playground

## Copyright and license

Copyright 2018, Matthias Munder.  
Licensed under the [MIT license](./LICENSE).

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
