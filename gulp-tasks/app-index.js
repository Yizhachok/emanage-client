'use strict';

var gulp=require('gulp'),
	jade=require('gulp-jade'),
	htmlmin=require('gulp-htmlmin'),
	config=require('../config/gulp');

exports.task=function(){
	return gulp.src(config.appIndex)
		.pipe(jade({
			locals:{
				VERSION:config.VERSION
			},
			pretty:true
		}))
		.pipe(htmlmin({
			removeComments:true,
			collapseWhitespace:true
		}))
		.pipe(gulp.dest(config.outputDir));
};