/*
var argscheck = require('cordova/argscheck'),
utils = require('cordova/utils'),
exec = require('cordova/exec');
*/

var 2exCam = function() {
};
/*
2exCam.takeSnapshot = function(){
	exec(null, null, "Keyboard", "close", []);
};
*/

2exCam.alert = function(content){
  window.alert(content);
};
/*
Keyboard.hideKeyboardAccessoryBar = function(hide) {
    exec(null, null, "Keyboard", "hideKeyboardAccessoryBar", [hide]);
};

Keyboard.close = function() {	
    exec(null, null, "Keyboard", "close", []);
};

Keyboard.show = function() {
    exec(null, null, "Keyboard", "show", []);
};

Keyboard.disableScroll = function(disable) {
    exec(null, null, "Keyboard", "disableScroll", [disable]);
};


Keyboard.styleDark = function(dark) {
 exec(null, null, "Keyboard", "styleDark", [dark]);
};
*/

// Keyboard.isVisible = false;

module.exports = 2exCam;



