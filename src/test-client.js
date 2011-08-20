/* Socket.io client test */

var config = require('./config.js'),
    util = require('util'),
    io = require("socket.io-client"),
    socket = new io.Socket('localhost', {'port':config.port});

socket.connect();
socket.on('connect', function(){
	util.log('connected to client');
});
socket.on('message', function(data){
	util.log('message from client: ' + data);
});
socket.packet('some data');
