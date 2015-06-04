'use strict';

var fs=require('fs'),
	config=require('../config/gulp'),
	changelog=require('conventional-changelog');

exports.task=function(){
	var options={
		repository:'https://github.com/Yizhachok/emanage-client',
		version:config.VERSION,
		file:'CHANGELOG.md'
	};

	if(config.SHA){
		options.from=config.SHA;
	}

	changelog(options,function(err,log){
		fs.writeFileSync(config.ROOT+'/CHANGELOG.md',log);
	});
};