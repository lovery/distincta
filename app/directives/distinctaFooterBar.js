(function () {
	'use strict';

	angular.module('distincta').directive('distinctaFooterBar', [
		'$location', '$timeout',
		function($location, $timeout) {
			return {
				restrict: 'E',
				scope: {
					footerInfo: '='
				},
				link: function( $scope, elem, attrs ) {
					elem.ready(function(){
						$scope.$apply(function(){
							$timeout(function() {
								$('footer').css('padding-bottom', window.innerHeight - $('.wrapper').innerHeight() - $('footer').innerHeight() + parseInt($('footer').css('padding-bottom').replace("px", "")));
							});
						});
					});
				},
				templateUrl: 'templates/distincta-footer-bar.html'
			};
		}
	]);
}());
