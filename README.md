# universal-rxjs-ajax

Completly copied from [jayphelps](https://github.com/jayphelps) suggestions made in a comment about this [issue](https://github.com/ReactiveX/rxjs/issues/2099).

Makes `Observable.ajax` available in Node.js through [xhr2](https://github.com/pwnall/node-xhr2). This is very helpful for testing http requests with Node.js based test frameworks.

## Usage

```js
import { request } from 'universal-rxjs-ajax'

request({ url: '/something' })
  .subscribe(value => console.log(value))
```


make a ommment about nodeenv === test