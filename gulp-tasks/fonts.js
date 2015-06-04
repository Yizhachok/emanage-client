'use strict';

var path=require('path'),
	gulp=require('gulp'),
	config=require('../config/gulp');

exports.task=function(){
	return gulp.src(config.fonts)
		.pipe(gulp.dest(path.join(config.outputDir,'fonts')));
};