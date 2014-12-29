mock-socket.io
==============

Simple mock for socket.io, for testing!

When I say simple, I mean *really* simple. The entire library is smaller than this readme.

**Only the basics of socket.io are supported.** Rooms, namespaces, etc. are not supported. If you're using socket.io for a simple app, this is a nice drop-in replacement.

Issues and Pull Requests are welcome.

#usage

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

#license

[VOL](http://veryopenlicense.com)
