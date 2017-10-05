"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(['./canvasJS'], factory);
    } else {
        root.canvasJS = factory();
    }
})(this, function () {
    function canvasJS() {
    }
    canvasJS.prototype = Object.create(window.CanvasJS);
	return canvasJS;
});