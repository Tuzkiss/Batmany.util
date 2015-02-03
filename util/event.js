/**
*	 Copyright (c) 2014 - 2015 TuzK1ss 
*
*  Batmany.util.event.js need require.js
*
*     last modify date on 2015-2-03
*/

define(function () {
	'use strict';

	var bind = function (elm, evType, fn, boolen) {
		if (elm.addEventListener) {
			elm.addEventListener(evType, fn, boolen);
		} else if (elm.attachEvent) {
			elm.attachEvent('on' + evType, fn);
		} else {
			elm['on' + evType] = fn;
		};
	};

	var unbind = function (elm, evType, fn, boolen) {
		if(elm.removeEventListener) {
			elm.removeEventListener(evType, fn, boolen);
		} else if (elm.detachEvent) {
			elm.detachEvent('on' + evType, fn);
		} else {
			elm['on' + evType] = null;
		};
	};

	return {
		bind : bind,
		unbind : unbind
	}
});