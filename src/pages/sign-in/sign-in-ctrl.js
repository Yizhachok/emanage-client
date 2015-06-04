'use strict';

eManage
	.config(function($routeProvider){
		$routeProvider.when('/sign-in',{
			controller:'SignInCtrl as SignIn',
			templateUrl:'pages/sign-in/sign-in.html'
		});
	})
	.controller('SignInCtrl',function($http,$localStorage){
		var SignIn=this;

		SignIn.login='';
		SignIn.password='';

		SignIn.msg='';

		SignIn.signIn=function(){
			SignIn.msg='';

			var signInData={
				login:SignIn.login,
				password:SignIn.password
			};

			$http.post('/api/sign-in',signInData)
				.then(function(response){ // Success
					$localStorage.token=response.data;
				},function(response){ // Error
					SignIn.msg=response.data.msg;
				});
		};
	});