'use strict'

var assert = require('assert')
var githubLatestRelease = require('./')

it('should ', function () {
	assert.strictEqual(githubLatestRelease('unicorns'), 'unicorns & rainbows')
});
