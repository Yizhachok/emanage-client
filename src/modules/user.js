'use strict';

eManage
	.service('User',function($q,$localStorage,$http,Socket,SignInRedirect){
		var User=this;

		User.$auth=false;

		User.$haveAccess=function(){};

		function quietSignOut(){
			Socket.disconnect();
			delete $localStorage.token;
			User.$auth=false;
			for(var key in User){
				if(User.hasOwnProperty(key)&&key[0]!=='$'){
					delete User[key];
				}
			}
			SignInRedirect(true);
		}
		User.$isAuth=function(force){
			return $q(function(resolve,reject){
				if(!$localStorage.token||new Date($localStorage.token.expires)<new Date()){
					quietSignOut();
					reject({code:401,msg:'Unauthorized'});
				}
				else if(User.$auth&&!force){
					resolve(User);
				}
				else{
					$http.get('/api/auth-config').success(resolve).error(reject);
				}
			}).then(function(config){
				if(User!==config){
					User.$auth=true;
					extend(User,config);
					if(!Socket.socket.connected){
						// TODO: check socket.socket.options.query
						Socket.socket.io.opts.query={
							access_token:$localStorage.token._id
						};
						Socket.connect();
					}
				}
				return User;
			});
		};
		User.$signIn=function(login,password){
			var signInData={
				login:login,
				password:password
			};
			return $http.post('/api/sign-in',signInData)
				.then(function(response){
					$localStorage.token=response.data;
					SignInRedirect.redirectToSaved();
				});
		};
		User.$signOut=function(){
			return $q(function(resolve,reject){
				if(!$localStorage.token||new Date($localStorage.token.expires)<new Date()){
					resolve();
				}
				else{
					$http.get('/api/sign-out').then(resolve,reject);
				}
			}).then(quietSignOut);
		};
	});
