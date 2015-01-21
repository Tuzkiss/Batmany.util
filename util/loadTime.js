/**
*	 Copyright (c) 2014 - 2015 TuzK1ss 
*
*  Batmany.util.loadTime.js need require.js
*
*     last modify date on 2015-1-21
*/

define(function (){

	// console nowTime - domReadyTime
	var loadModuleTime = function (startTime, moduleName) {
		var costTime = new Date() - startTime;
		console.log('It costs ' + costTime + ' ms to load the module ' + moduleName + '.');
	};

	return {
		loadModuleTime : loadModuleTime
	}
});