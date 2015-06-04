'use strict';

var args=require('minimist')(process.argv.slice(2));

module.exports=exports={
	angular:[
		'bower_components/angular/angular.js',
		'bower_components/angular-animate/angular-animate.js',
		'bower_components/angular-aria/angular-aria.js',
		'bower_components/Chart.js/Chart.js',
		'bower_components/angular-chart.js/angular-chart.js',
		'bower_components/angular-cookies/angular-cookies.js',
		'bower_components/angular-material/angular-material.js',
		'bower_components/angular-resource/angular-resource.js',
		'bower_components/angular-route/angular-route.js',
		'bower_components/angular-socket-io/socket.js',
		'bower_components/angular-translate/angular-translate.js'
	],

	style:[
		'bower_components/angular/angular-csp.css',
		'bower_components/angular-material/angular-material.css',
		'bower_components/mdi/css/materialdesignicons.css',
		'bower_components/angular-chart.js/dist/angular-chart.css'
	],

	fonts:'bower_components/mdi/fonts/*',

	appJs:[
		'src/common.js',
		'src/app-module.js',
		'src/**/*.js',
		'!src/**/*.spec.js'
	],
	appLess:[
		'src/**/*.less',
		'!src/less/include/**/*.less'
	],

	appJade:[
		'!src/index.jade',
		'src/**/*.jade'
	],
	appTemplateModule:'eManage-templates',
	appIndex:'src/index.jade',

	appLocales:[
		'en',
		'uk',
		'ru'
	],
	appLocaleModule:'eManage-locale',
	// Automatic generated paths
	appLocale:[],
	angularLocale:[],

	outputDir:'dist/',

	// CONSTANTS
	ROOT:require('path').normalize(__dirname+'/..'),
	VERSION:args.version||require('../package.json').version,
	IS_DEV:args.dev,
	SHA:args.sha
};

exports.appLocales.forEach(function(locale){
	exports.appLocale.push('src/i18n/'+locale+'.json');
	exports.angularLocale.push('bower_components/angular-i18n/angular-locale_'+locale+'.js');
});