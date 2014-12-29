var EventEmitter = require('events').EventEmitter

function randStr() {
	return Math.random().toString().slice(2)
}

function Server() {
	var svr = new EventEmitter
	svr.attach = function () {}
	svr.listen = function () {}
	return svr
}

function Client(svr) {
	var socket = new EventEmitter
	process.nextTick(function () {
		svr.emit('connect', socket)
		svr.emit('connection', socket)
		socket.emit('connect')
		socket.emit('connection')
	})
	socket.id = randStr()
	return socket
}

module.exports = {
	Server: Server,
	Client: Client
}
