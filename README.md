# promise-assert
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Inline `Promise` assertion library. 

## Installation
```bash
$ npm install promise-assert
```

## Usage
```js
const pa = require('promise-assert')

Promise.resolve(1337)
  .then(pa.equal(1337))
  // => ok
```

## API
##### pa()
```js
Promise.resolve(false)
  .then(pa())
  // => AssertionError
```

##### pa.ok()
`pa.ok()` == `pa()`

##### pa.equal()
```js
Promise.resolve('hello')
  .then(pa.equal('hello'))
  // => ok
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/promise-assert.svg?style=flat-square
[npm-url]: https://npmjs.org/package/promise-assert
[travis-image]: https://img.shields.io/travis/yoshuawuyts/promise-assert.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/promise-assert
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/promise-assert.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/promise-assert?branch=master
[downloads-image]: http://img.shields.io/npm/dm/promise-assert.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/promise-assert
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
