/**
*	 Copyright (c) 2014 - 2015 TuzK1ss 
*
*  Batmany.util.time.js need require.js
*
*     last modify date on 2015-2-03
*/

define(function () {
	var showTime = function () {
			var timeDiv = document.querySelector('.time'),
				now 	= new Date(),
			 	year 	= now.getFullYear(),
			 	month 	= now.getMonth() + 1,
			 	day 	= now.getDate(),
			 	hour 	= now.getHours() < 10 ? ( '0' + now.getHours() ) : now.getHours(),
			 	minute 	= now.getMinutes() < 10 ? ( '0' + now.getMinutes() ) : now.getMinutes(),
			 	second	= now.getSeconds() < 10 ? ( '0' + now.getSeconds() ) : now.getSeconds();

			var time = year + '-' + month +'-' + day + ' ' + hour + ':' + minute + ':' + second;
			timeDiv.innerHTML = time;

			setTimeout('showTime()', 500);
		};

		var showCountDown = function () {
			var countDownDiv = document.querySelector('.countDown'),
				endDate		 = new Date('2015-2-18 00:00'),
			 	now 	 	 = new Date(),
			 	countSecond  = ~~(endDate - now);
			 	day	     	 = countSecond / (24 * 60 * 60 * 1000),
			 	hour 		 = countSecond / (60 * 60 * 1000) % 24,
			 	minute		 = countSecond / (60 * 1000) % 60,
			 	second       = countSecond / 1000 % 60;
 
			var time = ~~day + 'd ' + ~~hour + 'h ' + ~~minute + 'm ' + ~~second + 's ';
			countDownDiv.innerHTML = time;

			setTimeout('showCountDown()', 500);
		};

	return {
		showTime : showTime,
		showCountDown : showCountDown
	}
});