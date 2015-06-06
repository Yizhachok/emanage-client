'use strict';

var karma=require('karma').server,
	config=require('../config/gulp');

exports.dependencies=['watch'];

exports.task=function(done){
	karma.start({
		singleRun:false,
		autoWatch:true,
		configFile:config.ROOT+'/config/karma.js',
		browsers:config.ARGS.browsers?config.ARGS.browsers.trim().split(','):['Chrome']
	},done);
};