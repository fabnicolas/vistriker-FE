//  cordova-plugin-fullscreen
//  Copyright © 2016 filfat Studios AB
//  Repo: https://github.com/filfat-Studios-AB/cordova-plugin-fullscreen
var exec = require('cordova/exec');

module.exports = {
    /* On */
    on: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'Fullscreen', 'on', []);
    },
    
    /* Off */
    off: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'Fullscreen', 'off', []);
    },
};
