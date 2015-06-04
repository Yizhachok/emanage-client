'use strict';

var gulp=require('gulp'),
	path=require('path'),
	config=require('../config/gulp');

exports.task=function(){
	return gulp.src(config.angularLocale)
		.pipe(gulp.dest(path.join(config.outputDir,'i18n')));
};