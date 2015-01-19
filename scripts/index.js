/**
*	 Copyright (c) 2014 - 2015 TuzK1ss 
*
*  				index.js
*
*     last modify date on 2015-1-16
*/

console.log( new Date().toLocaleString() + ' load index js success.');

require.config({
	baseUrl : 'util',
	path : {

	}
});

requirejs ( ['localStorage', 'urlSearch', 'browserType', 'arraySort'], function (ls, gus, bt, as) {

	var storage = ls.showAllStorage();
	for ( var s in storage)
		document.write( 'localStorage :  ' + s + '  ' + ls.getStorage(s) + '<br/>' );

	document.write( 'urlSearch : ' + gus.getUrlSearch() + '<br/>' );

	var array = ['1', '3', '5', '4', '2'];
	document.write( 'arraySortBefore : ' + array + '<br/>' );
	document.write( 'arraySortAfter  : ' + as.numberSort(array, 123) + '<br/>' );
	 

});