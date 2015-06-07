'use strict';

var expect=require('./../chai').expect,
	SignInPage=require('./sign-in.po.js');

describe('Sign in tests',function(){
	var signInPage,params=browser.params;
	beforeEach(function(){
		signInPage=new SignInPage();
		signInPage.get();
	});

	it('should activate sign in button',function(){
		expect(signInPage.signInBtn.isEnabled()).to.eventually.be.false;
		signInPage.setLogin(params.signIn.login);
		signInPage.setPassword(params.signIn.password);
		expect(signInPage.signInBtn.isEnabled()).to.eventually.be.true;
	});
});