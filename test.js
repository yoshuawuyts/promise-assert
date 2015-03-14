const assert = require('assert')
const test = require('tape')
const pa = require('./')

test('pa() == pa.ok()', function (t) {
  t.plan(1)
  t.equal(pa.ok, pa, 'prototype')
})

test('pa.ok()', function (t) {
  t.plan(4)
  const validation = pa.ok('msg')

  validation(true)
    .then(function () {
      t.ok(true, 'catch truthy')
    })

  validation(false)
    .catch(function (err) {
      t.ok(true, 'catch errs')
      t.ok(err instanceof assert.AssertionError, 'AssertionError')
      t.equal(err.message, 'msg')
    })
})

test('pa.equal()', function (t) {
  t.plan(4)
  const validation = pa.equal(1337, 'msg')

  validation(1337)
    .then(function () {
      t.ok(true, 'catch truthy')
    })

  validation(false)
    .catch(function (err) {
      t.ok(true, 'catch errs')
      t.ok(err instanceof assert.AssertionError, 'AssertionError')
      t.equal(err.message, 'msg')
    })
})
