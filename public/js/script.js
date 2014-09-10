'use strict';

var debug = true;
var socket = io();
// VideoJS
var	videojsConfig = {
	"autoplay": false,
	"controls": false,
	"preload": "auto",
	"techOrder": ["html5"]
};

// DOM ready
$(function() {

	var defaultBehaviors = (function(){

		// Disable right click
		$(document).bind('contextmenu', function(e) {
			e.stopPropagation();
			e.preventDefault();
			e.stopImmediatePropagation();
			return false;
		});

		// Disable dragging images
		$('img').on('dragstart', function(event) { event.preventDefault(); });

		// Enable cursor
		if(debug){$('html').css('cursor','default');}

	})();

	// Initialization tasks
	(function init(){

		if(debug){
			console.log('Debug mode ON');
		} else console.log('Debug mode OFF');

	})();

	/*** Main ***/


});

