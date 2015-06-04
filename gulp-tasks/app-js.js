'use strict';

var gulp=require('gulp'),
	concat=require('gulp-concat'),
	header=require('gulp-header'),
	footer=require('gulp-footer'),
	uglify=require('gulp-uglify'),
	replace=require('gulp-replace'),
	sourcemaps=require('gulp-sourcemaps'),
	ngAnnotate=require('gulp-ng-annotate'),
	config=require('../config/gulp');

exports.task=function(){
	return gulp.src(config.appJs)
		.pipe(sourcemaps.init())
		.pipe(replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g,'$1'))
		.pipe(concat('app.js'))
		.pipe(ngAnnotate({
			single_quotes:true
		}))
		.pipe(header('(function(window,document,undefined){\n"use strict";\n'))
		.pipe(footer('\n})(window,document);\n'))
		.pipe(uglify())
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest(config.outputDir));
};