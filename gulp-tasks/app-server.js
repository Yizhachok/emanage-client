'use strict';

var gulp=require('gulp'),
	webserver=require('gulp-webserver'),
	config=require('../config/gulp');

exports.task=function(){
	return gulp.src(config.outputDir)
		.pipe(webserver({
			host:'0.0.0.0',
			livereload:true,
			port:config.LR_PORT,
			directoryListing:{
				enable:true,
				path:config.outputDir
			}
		}));
};