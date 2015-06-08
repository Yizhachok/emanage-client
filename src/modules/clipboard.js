'use strict';

eManage
	.factory('Clipboard',function($window){
		return function CopyToClipboard(text){
			$window.prompt('Copy to clipboard: Ctrl + C -> Enter',text);
		};
	});