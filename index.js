/*eslint eqeqeq:0*/
const ES6Promise = require('es6-promise').Promise
const assert = require('assert')
const AssertionError = assert.AssertionError

module.exports = ok
ok.ok = ok

// promise equivalent of `assert.ok()`
// @param {String?} msg
// @return {Function}
function ok (msg) {
  // @param {Any} val
  // @return {Promise}
  return function (val) {
    if (val) return ES6Promise.resolve(val)
    var err = new AssertionError(msg)
    err.message = msg
    return ES6Promise.reject(err)
  }
}

// promise equivalent of `assert.equal()`
// @param {Any} orig
// @param {String?} msg
// @return {Function}
ok.equal = function equal (orig, msg) {
  // @param {Any} val
  // @return {Promise}
  return function (val) {
    if (orig == val) return ES6Promise.resolve(val)
    var err = new AssertionError(msg)
    err.message = msg
    return ES6Promise.reject(err)
  }
}
