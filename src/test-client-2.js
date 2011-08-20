/* Socket.io client test */

var config = require('./config.js'),
    util = require('util'),
    io = require("socket.io"),
    socket = io.connect('http://localhost');
socket.on('news', function (data) {
	console.log(data);
	socket.emit('my other event', { my: 'data' });
});
