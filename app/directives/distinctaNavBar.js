(function () {
	'use strict';

	angular.module('distincta').directive('distinctaNavBar', function($location) {
		return {
			restrict: 'E',
			scope: {
				headerInfo: '=',
				pageSlug: '='
			},
			link: function( $scope, elem, attrs ) {
				elem.ready(function(){
					$scope.$apply(function(){
						$scope.no_lang_path = $location.path().substr(3);
					});
				});
			},
			templateUrl: 'templates/distincta-nav-bar.html'
		};
	});
}());
