'use strict';

eManage
	.config(function($routeProvider){
		$routeProvider.whenAuth('/sign-in',{
			controller:'IndexCtrl as Index',
			templateUrl:'pages/index/index.html'
		});
	})
	.controller('IndexCtrl',function(){
		var Index=this;
	});