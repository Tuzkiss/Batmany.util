/**
*	 Copyright (c) 2014 - 2015 TuzK1ss 
*
*  Batmany.util.localStorage.js need require.js
*
*     last modify date on 2015-1-16
*/

console.log( new Date().toLocaleString() + ' load localStorage module success.');

define(function () {
    'use strict';

    // set localStorage cover the old one
    var setStorage = function (lsName, lsValue) {
        if (window.localStorage) {
            localStorage.setItem(lsName, lsValue);
        } else {
            Console.log('sorry, your browser dont support localStorge.');
        };
    };

    // get localStorage
    var getStorage = function (lsName) {
        return localStorage.getItem(lsName) || null;
    };

    // show the all storage , return res
    var showAllStorage = function () {
        if (window.localStorage) {
            var storage = window.localStorage;

            var res = {};
            for (var i = 0; i < storage.length; i++) {
                if (!res[storage.key(i)]) {
                    res[storage.key(i)] = localStorage.getItem(storage.key(i));
                };
            };

            if (res) {
                return res;
            } else {
                console.log('this brower has no any localStorage about this website now.');
                return null;
            }
            
        } else {
            Console.log('sorry, your browser dont support localStorge.');
            return null;
        };
    };

    // return result function
    return {
        setStorage  : setStorage,
        getStorage  : getStorage,
        showAllStorage : showAllStorage
    };
});