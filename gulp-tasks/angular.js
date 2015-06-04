'use strict';

var gulp=require('gulp'),
	concat=require('gulp-concat'),
	uglify=require('gulp-uglify'),
	sourcemaps=require('gulp-sourcemaps'),
	config=require('../config/gulp');

exports.task=function(){
	return gulp.src(config.angular)
		.pipe(sourcemaps.init())
		.pipe(concat('angular.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest(config.outputDir));
};