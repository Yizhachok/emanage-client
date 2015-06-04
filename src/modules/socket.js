'use strict';

eManage
	.factory('Socket',function(socketFactory){
		var ioSocket=io({autoConnect:false}),
			socket=socketFactory({ioSocket:ioSocket});
		socket.socket=ioSocket;
		socket.forward('connect');
		socket.forward('disconnect');
		socket.on('connect',function(){
			console.log('Socket connected');
		});
		socket.on('disconnect',function(){
			console.log('Socket disconnected');
		});
		return socket;
	});