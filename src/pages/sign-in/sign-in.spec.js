'use strict';

describe('Sign in page',function(){
	describe('SignInRedirect',function(){
		var SignInRedirect,$location;

		beforeEach(inject(function($injector){
			SignInRedirect=$injector.get('SignInRedirect');
			$location=$injector.get('$location');
		}));

		it('redirect to sign in page',function(){
			$location.path('/');
			SignInRedirect();
			expect($location.path()).to.equal('/sign-in');
		});
		it('redirect to index page',function(){
			$location.path('/sign-in');
			SignInRedirect.redirectToSaved();
			expect($location.path()).to.equal('/');
		});
		it('redirect to saved page',function(){
			$location.path('/saved');
			SignInRedirect();
			expect($location.path()).to.equal('/sign-in');
			SignInRedirect.redirectToSaved();
			expect($location.path()).to.equal('/saved');
		});
	});
	describe('SignInCtrl',function(){
		var $httpBackend,
			$location,
			$scope,
			SignIn,
			user={
				login:'admin',
				password:'admin'
			};

		beforeEach(inject(function($injector,$controller){
			$httpBackend=$injector.get('$httpBackend');

			$scope=$injector.get('$rootScope').$new();
			SignIn=$controller('SignInCtrl',{$scope:$scope});

			$location=$injector.get('$location');
			$location.path('/sign-in');
		}));

		it('redirect to index page',function(){
			var expires=new Date();
			expires.setDate(expires.getDate()+6);
			$httpBackend.expectPOST('/api/sign-in',user)
				.respond({
					_id:'00000000-0000-0000-0000-000000000000',
					time:(new Date()).toJSON(),
					expires:expires.toJSON()
				});

			SignIn.login=user.login;
			SignIn.password=user.password;

			SignIn.signIn();
			$httpBackend.flush();

			expect($location.path()).to.equal('/');
		});
		it('stay on login page',function(){
			$httpBackend.expectPOST('/api/sign-in',user)
				.respond(401,{
					status:401,
					msg:'Wrong login or password'
				});

			SignIn.login=user.login;
			SignIn.password=user.password;

			SignIn.signIn();
			$httpBackend.flush();

			expect($location.path()).to.equal('/sign-in');
		});
	});
});