'use strict';

var eManage=angular.module('eManage',
	[
		'ngAnimate',
		'ngAria',
		'chart.js',
		'ngCookies',
		'ngLocale',
		'ngMaterial',
		'ngResource',
		'ngRoute',
		'btford.socket-io',
		'pascalprecht.translate',
		'ngStorage',
		'eManage-templates'
	],
	function($routeProvider){
		function isAuth(Auth){
			return Auth.isAuth();
		}
		isAuth.$inject=['Auth'];
		$routeProvider.whenAuth=function(path,route){
			route.resolve=route.resolve||{};
			route.resolve.isAuth=isAuth;
			return $routeProvider.when(path,route);
		};
		$routeProvider.otherwise({
			redirectTo:'/'
		});
	}
);