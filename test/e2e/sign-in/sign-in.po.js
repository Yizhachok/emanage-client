'use strict';

module.exports=function SignInPage(){
	this.get=function(){
		browser.get('#/sign-in');
	};

	this.loginInput=element(by.model('SignIn.login'));
	this.setLogin=function(name){
		this.loginInput.sendKeys(name);
	};

	this.passwordInput=element(by.model('SignIn.password'));
	this.setPassword=function(password){
		this.passwordInput.sendKeys(password);
	};
	
	this.signInBtn=element(by.css('.sign-in-button'));
};