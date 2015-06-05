'use strict';

var runSequence=require('run-sequence');

exports.task=function(callback){
	runSequence(
		'clean-dist',
		[
			'watch',
			'build'
		],
		'app-server',
		callback
	);
};