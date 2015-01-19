/**
*	 Copyright (c) 2014 - 2015 TuzK1ss 
*
*  Batmany.util.arraySort.js need require.js
*
*     last modify date on 2015-1-19
*/

console.log( new Date().toLocaleString() + ' load arraySort module success.');

define(function () {
	'use strict';

	// number sort - default rise
	var numberSort = function (array, isRise){
		console.log(isRise);
		if (isRise == 'undefined') {
			isRise = true;
		};
		console.log(isRise);
		var returnArray = [];

		if (isRise) {
			returnArray = array.sort(function (a, b) {
				return a - b;
			});
		} else {
			returnArray = array.sort(function (a, b) {
				return b - a;
			});
		};

		return returnArray;
	}
	
	return {
		numberSort : numberSort
	};
});