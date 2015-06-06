'use strict';

eManage
	.config(function($routeProvider){
		$routeProvider.when('/sign-in',{
			controller:'SignInCtrl as SignIn',
			templateUrl:'pages/sign-in/sign-in.html'
		});
	})
	.controller('SignInCtrl',function($http,$localStorage,$mdToast){
		var SignIn=this;

		SignIn.login='';
		SignIn.password='';

		SignIn.signIn=function(){
			var signInData={
				login:SignIn.login,
				password:SignIn.password
			};

			$http.post('/api/sign-in',signInData)
				.then(function(response){ // Success
					$localStorage.token=response.data;
				},function(response){ // Error
					$mdToast.show(
						$mdToast.simple()
							.content(response.data.msg)
							.position('top right')
							.hideDelay(3000)
					);
				});
		};
	});