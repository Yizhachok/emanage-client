'use strict';

eManage
	.factory('jsonDateStringConverter',function(){
		// /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d+)(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;
		var regexIso8601=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;

		return function convertDateStringToDates(input){
			if(angular.isObject(input)) forEach(input,function(value,key){
				var match;
				if(typeof value==='string'&&(match=value.match(regexIso8601))){
					var milliseconds=Date.parse(match[0]);
					if(!isNaN(milliseconds)) input[key]=new Date(milliseconds);
				}
				else convertDateStringToDates(value);
			});
			return input;
		};
	});