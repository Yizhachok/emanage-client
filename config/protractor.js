'use strict';

exports.config={
	seleniumAddress:'http://localhost:4444/wd/hub',
	framework:'mocha',
	// Spec patterns are relative to this directory.
	suites:{
		signIn:'../test/e2e/sign-in/*.spec.js',
		full:'../test/e2e/**/*.spec.js'
	},

	onPrepare:function(){
		// Set window size before starting the tests
		browser.driver.manage().window().setSize(1300,700);
	},

	capabilities:{
		browserName:'chrome'
	},

	params:{
		signIn:{
			login:'admin',
			password:'admin'
		}
	},

	baseUrl:'http://localhost:8080/index.html',

	mochaOpts:{
		reporter:'spec',
		timeout:4000,
		ui:'bdd'
	}
};
