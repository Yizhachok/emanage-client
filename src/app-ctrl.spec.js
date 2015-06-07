'use strict';

describe('AppCtrl',function(){
	var $controller,$scope;

	beforeEach(inject(function(_$controller_){
		$controller=_$controller_;
		$scope={};
	}));

	it('all properties and methods exist',function(){
		var controller=$controller('AppCtrl',{$scope:$scope});
		expect(controller.User).to.exist;
		expect(controller.openMainMenu).to.exist;
		expect(controller.realtimeConnected).to.be.false;
		expect(controller.allowedMainMenu()).to.be.false;
	});
});