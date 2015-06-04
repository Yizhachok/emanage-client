'use strict';

eManage
	.factory('Clipboard',function(){
		return function CopyToClipboard(text){
			window.prompt('Copy to clipboard: Ctrl + C -> Enter',text);
		};
	});