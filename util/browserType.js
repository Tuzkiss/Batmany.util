/**
*	 Copyright (c) 2014 - 2015 TuzK1ss 
*
*  Batmany.util.browser.js need require.js
*
*     last modify date on 2015-1-19
*/

console.log( new Date().toLocaleString() + ' load browser module success.');

define(function () {
	'use strict';

	var t = true;

	var detect = function (ua) {

		// match the regex , return the first match or null
		var getFirstMath = function (regex) {
			var match = ua.match(regex);
			return (match && match.length > 1 && match[1]) || '';
		};

		var iosDevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase();
		var android = /android/i.test(ua);
		var versionIdentifier = getFirstMatch(/version\/(\d+(\.d+)?)/i);
	};


});