'use strict';

var gulp=require('gulp'),
	concat=require('gulp-concat'),
	replace=require('gulp-replace'),
	minifyCss=require('gulp-minify-css'),
	sourcemaps=require('gulp-sourcemaps'),
	config=require('../config/gulp');

exports.task=function(){
	return gulp.src(config.style)
		.pipe(sourcemaps.init())
		.pipe(replace(/url\("\.\.\/fonts\/materialdesignicons-webfont/g,'url("fonts/materialdesignicons-webfont'))
		.pipe(concat('style.css'))
		.pipe(minifyCss())
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest(config.outputDir));
};