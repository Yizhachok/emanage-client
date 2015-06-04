'use strict';

var gulp=require('gulp'),
	less=require('gulp-less'),
	concat=require('gulp-concat'),
	minifyCss=require('gulp-minify-css'),
	sourcemaps=require('gulp-sourcemaps'),
	config=require('../config/gulp');

exports.task=function(){
	return gulp.src(config.appLess)
		.pipe(sourcemaps.init())
		.pipe(less({
			paths:[
				'app_public/less/include'
			]
		}))
		.pipe(concat('app.css'))
		.pipe(minifyCss())
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest(config.outputDir));
};