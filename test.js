'use strict'

var assert = require('assert')
var latest = require('./')
var nock = require('nock')
var fixture = require('./fixture')



var expect = {
  "id": 1346672,
  "tag_name": "v0.27.1",
  "target_commitish": "master",
  "name": "electron v0.27.1",
  "draft": false,
  "prerelease": false,
  "created_at": "2015-05-28T08:23:29Z",
  "published_at": "2015-05-28T09:16:50Z"
}

it('should work will callback', function(done) {
  var scope = nock('https://api.github.com')
    .get('/repos/atom/electron/releases/latest')
    .reply(200, fixture)

  latest('atom', 'electron', function(err, res) {
    assert.deepEqual(res, expect)
    done()
  })
})

it('should work will promise', function(done) {
  var scope = nock('https://api.github.com')
    .get('/repos/atom/electron/releases/latest')
    .reply(200, fixture)

  latest('atom', 'electron')
  .then(function(res) {
    assert.deepEqual(res, expect)
    done()
  })
})
