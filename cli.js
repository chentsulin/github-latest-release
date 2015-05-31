#!/usr/bin/env node
'use strict'

var meow = require('meow')
var githubLatestRelease = require('./')

var cli = meow({
	help: [
		'Usage',
		'  $ github-latest-release [input]',
		'',
		'Examples',
		'  $ github-latest-release',
		'  unicorns & rainbows',
		'',
		'  $ github-latest-release ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	].join('\n')
})

console.log(githubLatestRelease(cli.input[0] || 'unicorns'))
