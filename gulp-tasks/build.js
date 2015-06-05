'use strict';

var runSequence=require('run-sequence');

exports.task=function(callback){
	runSequence(
		'clean-dist',
		[
			'angular',
			'angular-locale',
			'app-index',
			'app-js',
			'app-locale',
			'app-style',
			'app-templates',
			'fonts',
			'style'
		],
		callback
	);
};