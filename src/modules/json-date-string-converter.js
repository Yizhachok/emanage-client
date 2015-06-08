'use strict';

eManage
	.factory('jsonDateStringConverter',function(){
		var regexIso8601=/\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)/;
		return function jsonDateStringConverter(obj){
			if(typeof obj==='object'&&obj!==null) for(var key in obj) if(obj.hasOwnProperty(key)){
				var value=obj[key];
				if(typeof value==='string'&&regexIso8601.test(value)){
					value=Date.parse(value);
					if(!isNaN(value)) obj[key]=new Date(value);
				}
				else jsonDateStringConverter(value);
			}
			return obj;
		};
	});