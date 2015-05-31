# github-latest-release

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Get latest release information from github repository using [github api](https://developer.github.com/v3/repos/releases/#get-the-latest-release)


## Install

```
$ npm install github-latest-release
```


## Usage

```js
var latest = require('github-latest-release')

latest('atom', 'electron')
.then(console.log.bind(console))
//=>
{
  "id": 1,
  "tag_name": "v1.0.0",
  "target_commitish": "master",
  "name": "v1.0.0",
  "draft": false,
  "prerelease": false,
  "created_at": "2013-02-27T19:35:32Z",
  "published_at": "2013-02-27T19:35:32Z"
}
```


## CLI

```
$ npm install -g github-latest-release
```
```
$ github-latest-release atom electron
```


## API

### githubLatestRelease(owner, repo [, cb])

#### owner

*Required*
Type: `string`

repository owner.

#### repo

*Required*
Type: `string`

repository name.

#### cb

*Optional*
Type: `function (err, res)`

If no callback given, will return promise.


## License

MIT © [C.T. Lin](http://github.com/chentsulin/github-latest-release)

[npm-image]: https://img.shields.io/npm/v/github-latest-release.svg?style=flat-square
[npm-url]: https://npmjs.org/package/github-latest-release
[travis-image]: https://travis-ci.org/chentsulin/github-latest-release.svg
[travis-url]: https://travis-ci.org/chentsulin/github-latest-release
[coveralls-image]: https://img.shields.io/coveralls/chentsulin/github-latest-release.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chentsulin/github-latest-release
[david_img]: https://img.shields.io/david/chentsulin/github-latest-release.svg
[david_site]: https://david-dm.org/chentsulin/github-latest-release

