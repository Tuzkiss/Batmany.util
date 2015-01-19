/**
*	 Copyright (c) 2014 - 2015 TuzK1ss 
*
*  Batmany.util.urlSearch.js need require.js
*
*     last modify date on 2015-1-16
*/

console.log( new Date().toLocaleString() + ' load urlSearch module success.');

define(function (){
	'use strict';

	var getUrl = window.location;

	var getUrlSearch = function () {

		if (window.location.search) {
			var search = window.location.search.substring(1);
			var searchArray = [];
			var tmpArray = [];
			var res = {};
			var i;

			searchArray = search.split('&');

			for(i = 0; i < searchArray.length; i ++) {
				tmpArray = searchArray[i].split('=');

				res[tmpArray[0]] = decodeURI (tmpArray[1]);
			};

			return res;

		} else {
			console.log('no search text.');
			return null;
		};

	};

	return {
		getUrl 		 : getUrl,
		getUrlSearch : getUrlSearch
	};
});