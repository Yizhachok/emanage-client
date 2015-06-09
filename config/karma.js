'use strict';

module.exports=function(config){
	var src=[
			'dist/app-tpl.js',
			'src/common.js',
			'src/app-module.js',
			'src/**/*.js'
		],
		// Load list of sources from gulp config file
		dependencies=require('./gulp').angular.concat(
			// Add 3d party mocks
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/angular-material/angular-material-mocks.js',
			'bower_components/angular-socket-io/mock/socket-io.js',

			'test/app-mocks.js',
			'test/app-spec.js'
		);

	config.set({
		basePath:__dirname+'/..',
		frameworks:[
			'mocha',
			'chai'
		],
		files:dependencies.concat(src),

		logLevel:config.LOG_WARN,
		port:9876,
		reporters:[
			// Default: progress
			'spec',
			'coverage'
		],
		colors:true,

		// Continuous Integration mode
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch:false,
		singleRun:true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox (has to be installed with `npm install karma-firefox-launcher`)
		// - Opera (has to be installed with `npm install karma-opera-launcher`)
		// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
		// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
		browsers:['Chrome'],

		customLaunchers:{
			Chrome_without_security:{
				base:'Chrome',
				flags:['--disable-web-security']
			}
		},

		preprocessors: {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'src/**/!(*.spec).js':['coverage']
		},
		coverageReporter: {
			type:'html',
			dir:'coverage/'
		},

		client:{
			captureConsole:false,
			mocha:{
				ui:'bdd'
			}
		}
	});
};
