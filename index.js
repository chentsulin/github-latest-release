'use strict'

var request = require('request')
var Promise = require('bluebird')
var _pick = require('lodash.pick')
var base = 'https://api.github.com/repos/'
var target = '/releases/latest'


exports = module.exports = function(owner, repo, cb) {
  if (cb & typeof cb !== 'function') {
    throw new TypeError('callback Expected a function')
  }

  if (typeof owner !== 'string') {
    throw new TypeError('owner Expected a string')
  }

  if (typeof repo !== 'string') {
    throw new TypeError('repo Expected a string')
  }

  var options = {
    url: base + owner + '/' + repo + target,
    headers: {
      'User-Agent': 'request'
    }
  }

  if (cb) {
    request(options, function(err, res, body) {
      if (err) return cb(err)
      if (res.statusCode != 200) return cb(new Error(body))
      cb(null, output(JSON.parse(body)))
    })
  } else {
    return new Promise(function(resolve, reject) {
      request(options, function(err, res, body) {
        if (err) return reject(err)
        if (res.statusCode != 200) return reject(new Error(body))
        resolve(output(JSON.parse(body)))
      })
    })
  }
}


function output(json) {
  var output = _pick(json, [
    'id',
    'tag_name',
    'target_commitish',
    'name',
    'draft',
    'prerelease',
    'created_at',
    'published_at'
  ])

  return output
}
