var util = require('util')
var EventEmitter = require('events').EventEmitter

function randStr() {
	return Math.random().toString().slice(2)
}

function Socket(counterpart) {
	this.counterpart = counterpart
}

util.inherits(Socket, EventEmitter)

Socket.prototype.setCounterpart = function(counterpart) {
	this.counterpart = counterpart
}

Socket.prototype._emit = Socket.prototype.emit

Socket.prototype.emit = function() {
	Socket.prototype._emit.apply(this.counterpart, arguments)
}

function Server() {
	var svr = new EventEmitter()
	svr.attach = function () {}
	svr.listen = function () {}
	return svr
}

function Client(svr) {
	var clientSocket = new Socket()
	var serverSocket = new Socket(clientSocket)
	clientSocket.setCounterpart(serverSocket)
	process.nextTick(function () {
		svr.emit('connect', serverSocket)
		svr.emit('connection', serverSocket)
		clientSocket._emit('connect')
		clientSocket._emit('connection')
	})
	clientSocket.id = randStr()
	serverSocket.id = clientSocket.id
	return clientSocket
}

module.exports = {
	Server: Server,
	Client: Client
}
