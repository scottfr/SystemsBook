"use strict";

var translations = {};

function getText(src){
	if(translations[src]){
		src = translations[src];
	}
	
	for(var i = 1; i < arguments.length; i++){
		src = src.replace("%s", arguments[i]);
	}
	
	return src;
}
