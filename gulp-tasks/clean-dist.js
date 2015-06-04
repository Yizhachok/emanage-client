'use strict';

var del=require('del'),
	gulp=require('gulp'),
	config=require('../config/gulp');

exports.task=function(callback){
	del([config.outputDir],callback);
};