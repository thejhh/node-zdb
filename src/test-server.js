/* Server test */

var config = require('./config.js'),
    util = require('util'),
    io = require('socket.io').listen(config.port);

io.sockets.on('connection', function (socket) {
	io.sockets.emit('this', { will: 'be received by everyone'} );
	socket.on('private message', function (from, msg) {
		util.log('I received a private message by ' + from + ' saying ' + msg);
	});
	socket.on('disconnect', function () {
		sockets.emit('user disconnected');
	});
});
