'use strict';

describe('Clipboard',function(){
	var Clipboard;

	beforeEach(inject(function(_Clipboard_){
		Clipboard=_Clipboard_;
	}));

	it('open prompt window with text to copy',inject(function($window){
		var textArg,
			testText='Test text';
		$window.prompt=function(text,value){
			textArg=value;
		};
		Clipboard(testText);
		expect(textArg).to.equal(testText);
	}));
});