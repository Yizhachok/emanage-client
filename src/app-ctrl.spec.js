'use strict';

describe('AppCtrl',function(){
	var $controller,$scope;

	beforeEach(inject(function(_$controller_){
		$controller=_$controller_;
		$scope={};
	}));

	it('all properties and methods exist',function(){
		var controller=$controller('AppCtrl',{$scope:$scope});
		Should.exist(controller.User);
		controller.realtimeConnected.should.be.false;
		Should.exist(controller.openMainMenu);
		controller.allowedMainMenu().should.be.false;
	});
});