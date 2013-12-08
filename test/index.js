'use strict';
/*jshint asi: true */

var test = require('tap').test
var requireFile = require('../')

test('\nrequire installed module', function (t) {
  var tap = requireFile('tap', __dirname + '../')
  t.equal(tap, tap, 'requires installed tap')
  t.end()
})

test('\nrequire module relative to root', function (t) {
  var bingo = requireFile('./relative-module.js', __dirname + '/fixture')

  t.equal(bingo, 'bingo', 'requires module relative to root')
  t.end()
})
