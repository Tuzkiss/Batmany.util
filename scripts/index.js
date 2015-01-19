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

requirejs ( ['localStorage', 'urlSearch', 'browserType'], function (ls, gus, bt) {

	document.write( 'localStorage : ' + ls.showAllStorage() );

	document.write( '<br/>urlSearch : ' + gus.getUrlSearch() );
	


});