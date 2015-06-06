'use strict';

eManage
	.controller('AppCtrl',function($rootScope,User,$mdSidenav){
		var App=this;

		App.User=User;

		App.openMainMenu=function(){
			$mdSidenav('main-menu').open();
		};
		App.allowedMainMenu=function(){
			return User.$auth;
		};

		App.realtimeConnected=false;
		$rootScope.$on('socket:connect',function(){
			App.realtimeConnected=true;
		});
		$rootScope.$on('socket:disconnect',function(){
			App.realtimeConnected=false;
		});
	});