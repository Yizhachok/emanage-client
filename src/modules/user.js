'use strict';

eManage
	.service('User',function($http){
		var User=this;

		User.$auth=false;

		User.$haveAccess=function(){};
		User.$update=function(){};
	});