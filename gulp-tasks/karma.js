'use strict';

var karma=require('karma').server,
	config=require('../config/gulp');

exports.task=function(done){
	karma.start({
		logLevel:'warn',
		singleRun:true,
		autoWatch:false,
		configFile:config.ROOT+'/config/karma.js',
		browsers:config.ARGS.browsers?config.ARGS.browsers.trim().split(','):['Chrome']
	},done);
};