'use strict';

/**
 * More useful mocked socket
 */
(function(mockIo){
	var mockSocketFn=mockIo.connect;
	function IO(){
		var socket=mockSocketFn();
		socket.io={
			opts:{query:{}}
		};
		socket.connected=false;
		socket.connect=function(){
			socket.connected=true;
		};
		socket.disconnect=function(){
			socket.connected=false;
		};
		return socket;
	}
	for(var key in mockIo) if(mockIo.hasOwnProperty(key)) IO[key]=mockIo[key];
	io=IO;
})(io);