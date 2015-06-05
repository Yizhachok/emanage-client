'use strict';

var gulp=require('gulp'),
	jade=require('gulp-jade'),
	concat=require('gulp-concat'),
	header=require('gulp-header'),
	footer=require('gulp-footer'),
	uglify=require('gulp-uglify'),
	htmlmin=require('gulp-htmlmin'),
	ngtemplate=require('gulp-ngtemplate'),
	config=require('../config/gulp');

exports.task=function(){
	return gulp.src(config.appJade)
		.pipe(jade({
			pretty:true
		}))
		.pipe(htmlmin({
			removeComments:true,
			collapseWhitespace:true
		}))
		.pipe(ngtemplate({
			pathPrefix:'',
			header:'',
			footer:'',
			useStrict:false
		}))
		.pipe(concat('app-tpl.js'))
		.pipe(header('"use strict";\nangular.module("'+config.appTemplateModule+'",[]).run(["$templateCache",function($templateCache){\n'))
		.pipe(footer('\n}]);'))
		.pipe(uglify())
		.pipe(gulp.dest(config.outputDir));
};