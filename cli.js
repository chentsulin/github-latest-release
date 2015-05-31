#!/usr/bin/env node
'use strict'

var meow = require('meow')
var latest = require('./')

var cli = meow({
	help: [
		'Usage',
		'  $ github-latest-release [owner] [repo]',
		'',
		'Examples',
		'  $ github-latest-release atom electron',
    '',
		'  { id: 1346672',
    '  tag_name: \'v0.27.1\'',
    '  target_commitish: \'master\'',
    '  name: \'electron v0.27.1\'',
    '  draft: false',
    '  prerelease: false',
    '  created_at: \'2015-05-28T08:23:29Z\'',
    '  published_at: \'2015-05-28T09:16:50Z\' }',
	].join('\n')
})

latest(cli.input[0], cli.input[1])
.then(console.log.bind(console))
