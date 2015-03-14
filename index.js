/*eslint eqeqeq:0*/
require('es6-promise').polyfill()
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
    if (val) return Promise.resolve()
    var err = new AssertionError(msg)
    err.message = msg
    return Promise.reject(err)
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
    if (orig == val) return Promise.resolve()
    var err = new AssertionError(msg)
    err.message = msg
    return Promise.reject(err)
  }
}
