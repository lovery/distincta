(function () {
	'use strict';

	angular.module('distincta').filter('to_trusted', ['$sce', function($sce) {
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}]);
}());
