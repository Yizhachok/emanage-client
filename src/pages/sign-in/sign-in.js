'use strict';

eManage
	.config(function($routeProvider){
		$routeProvider.when('/sign-in',{
			controller:'SignInCtrl as SignIn',
			templateUrl:'pages/sign-in/sign-in.html'
		});
	})
	.factory('SignInRedirect',function($location){
		function redirect(){
			if($location.path()!=='/sign-in'){
				redirect.redirectionPath=$location.url();
				$location.path('/sign-in');
			}
		}

		redirect.defaultPath='/';
		redirect.redirectionPath=redirect.defaultPath;
		redirect.redirectToSaved=function(){
			$location.url(redirect.redirectionPath);
			redirect.redirectionPath=redirect.defaultPath;
		};

		return redirect;
	})
	.controller('SignInCtrl',function(User,$mdToast){
		var SignIn=this;

		SignIn.login='';
		SignIn.password='';

		SignIn.signIn=function(){
			User.$signIn(SignIn.login,SignIn.password)
				.catch(function(response){
					$mdToast.show(
						$mdToast
							.simple()
							.content(response.data.msg)
							.action('Close')
							.highlightAction(false)
							.position('top right')
							.hideDelay(4000)
					);
				});
		};
	});