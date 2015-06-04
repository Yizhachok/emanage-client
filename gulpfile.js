'use strict';

var gulp=require('gulp'),
	fs=require('fs');

// Create tasks for gulp
fs.readdirSync('./gulp-tasks')
	.filter(function(filename){
		return filename.match(/\.js$/i);
	})
	.forEach(function(filename){
		var name=filename.substr(0,filename.length-3),
			contents=require('./gulp-tasks/'+filename);

		gulp.task(name,contents.dependencies,contents.task);
	});