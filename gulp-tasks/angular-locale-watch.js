'use strict';

var gulp=require('gulp'),
	config=require('../config/gulp');

exports.task=function(){
	return gulp.watch(config.angularLocale,['angular-locale']);
};