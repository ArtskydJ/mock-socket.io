mock-socket.io
==============

[![Build Status](https://travis-ci.org/ArtskydJ/mock-socket.io.svg?branch=master)](https://travis-ci.org/ArtskydJ/mock-socket.io)
[![Dependency Status](https://david-dm.org/artskydj/mock-socket.io.svg)](https://david-dm.org/artskydj/mock-socket.io)
[![devDependency Status](https://david-dm.org/artskydj/mock-socket.io/dev-status.svg)](https://david-dm.org/artskydj/mock-socket.io#info=devDependencies)

Simple mock for socket.io, for testing!

**Only the basics of socket.io are supported.** Rooms, namespaces, etc. are not supported. If you're using socket.io for a simple app, this is a nice drop-in replacement.

Issues and Pull Requests are welcome.

# usage

server.js
```js
var Server = require('mock-socket.io').Server
var io = new Server() //parameters will be ignored

//do stuff with `io`

module.exports = yourThing
module.exports.io = io
```

client.js
```js
var Client = require('mock-socket.io').Client
var serverIo = require('./server.js').io //above
var io = new Client(serverIo)
//do stuff with `io`
```

# license

[VOL](http://veryopenlicense.com)
