'use strict';

var expect=require('./../chai').expect,
	SignInPage=require('./sign-in.po.js');

describe('Sign in tests',function(){
	var signInPage,params=browser.params;
	beforeEach(function(){
		signInPage=new SignInPage();
		signInPage.get();
	});

	it('sign in button should be disabled',function(){
		expect(signInPage.signInBtn.isEnabled()).to.eventually.be.false;
	});
	it('sign in button should be active',function(){
		signInPage.setLogin(params.signIn.login);
		signInPage.setPassword(params.signIn.password);
		expect(signInPage.signInBtn.isEnabled()).to.eventually.be.true;
	});
});