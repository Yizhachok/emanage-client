'use strict';

eManage
	.controller('AppCtrl',function(User,$mdSidenav){
		var App=this;

		App.User=User;
		App.openMainMenu=function(){
			$mdSidenav('main-menu').open();
		};
	});