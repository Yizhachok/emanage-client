'use strict';

eManage
	.factory('httpInternalRequestConfigInterceptor',function($localStorage){
		var localRequest=/^\/?api/;
		return {
			request:function(config){
				if(localRequest.test(config.url)){
					if(!('timeout' in config)) config.timeout=10000;
					config.headers['x-requested-with']='xmlhttprequest';
					if($localStorage.token) config.headers.Authorization='Bearer '+$localStorage.token._id;
				}
				return config;
			}
		};
	})
	.factory('httpResponseErrorInterceptor',function($q,SignInRedirect){
		var redirectCodes=[401,402];

		return {
			responseError:function(rejection){
				var status=rejection.status;

				if(!angular.isObject(rejection.data)){
					var statusText=rejection.statusText;
					if(status===0) statusText='Server not respond';

					rejection.data={
						status:status,
						msg:status+': '+statusText
					};
				}

				if(~redirectCodes.indexOf(status)) SignInRedirect();
				else console.error(rejection.data.msg);
				return $q.reject(rejection);
			}
		};
	})
	.factory('httpJSONResponseDateConverterInterceptor',function(jsonDateStringConverter){
		return {
			response:function(response){
				jsonDateStringConverter(response.data);
				return response;
			}
		};
	})
	.config(function($httpProvider){
		$httpProvider.interceptors.push(
			'httpInternalRequestConfigInterceptor',
			'httpResponseErrorInterceptor',
			'httpJSONResponseDateConverterInterceptor'
		);
	});
