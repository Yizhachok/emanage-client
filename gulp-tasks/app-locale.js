'use strict';

var path=require('path'),
	gulp=require('gulp'),
	rename=require('gulp-rename'),
	header=require('gulp-header'),
	footer=require('gulp-footer'),
	uglify=require('gulp-uglify'),
	replace=require('gulp-replace'),
	config=require('../config/gulp'),
	headerStr=
		'"use strict";\n'+
		'angular.module("'+config.appLocaleModule+'",[]).config(["$translateProvider",function($translateProvider){\n'+
		'	$translateProvider.translations(',
	footerStr=
		'\n	);\n'+
		'}]);';

exports.task=function(){
	return gulp.src(config.appLocale)
		.pipe(replace(/^([\s\S]*"FILE_LOCALE_CODE"\s*:\s*"([\w-]*)"[\s\S]*)$/g,'"$2",$1'))
		.pipe(rename({
			extname:'.js'
		}))
		.pipe(header(headerStr))
		.pipe(footer(footerStr))
		.pipe(uglify())
		.pipe(gulp.dest(path.join(config.outputDir,'i18n')));
};