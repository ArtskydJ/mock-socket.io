var test = require('tap').test
var mock = require('./')

test('seems to work and stuff', { timeout: 5000 }, function (t) {
	t.plan(7)

	//server
	var srv = new mock.Server()
	srv.on('connect', function (socket) {
		t.pass('server connected')
		socket.emit('lol', 'cat')
		socket.emit('empty')

		socket.on('the quick', function (value) {
			t.equal(value, 'brown fox', 'the quick brown fox')
			socket.emit('jumps', 'over')
		})

		socket.on('the lazy', function () {
			var argArray = [].slice.call(arguments)
			t.deepEqual(argArray, ['do', 'gs', 'dogs'], 'the lazy dogs')
		})

		socket.on('jumps', function(){
			t.bailout('jumps called on server socket')
		})
	})

	//client
	var cli = new mock.Client(srv)
	cli.on('connect', function () {
		t.pass('client connected')
		cli.emit('the quick', 'brown fox')
	})
	cli.on('jumps', function (value) {
		t.equal(value, 'over', 'jumps over')
		cli.emit('the lazy', 'do', 'gs', 'dogs')
	})
	cli.on('lol', function (value) {
		t.equal(value, 'cat', 'lolcat')
	})
	cli.on('empty', function (value) {
		t.notOk(value, 'no value works')
	})
})
