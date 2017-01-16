(function () {
	'use strict';

	angular.module('distincta').controller('AboutCtrl', [
		'$scope', '$routeParams', '$rootScope', '$http',
		function ($scope, $routeParams, $rootScope, $http) {
			$http.get('data_files/' + $routeParams.lang + '_base_data.json').then( function (response) {
				$scope.base_data = response.data[0];
			});
			$http.get('data_files/' + $routeParams.lang + '_about_data.json').then( function (response) {
				$scope.about_data = response.data[0];
				$rootScope.metainformation.setTitle($scope.about_data.meta_title);
				$rootScope.metainformation.setMetaDescription($scope.about_data.meta_description);
				$rootScope.metainformation.setMetaKeywords($scope.about_data.meta_keywords);
			});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.about');
			$scope.showBiography = function (clickedOrder, suffixV) {
				$('#about-biography-review-' + suffixV + '_' + clickedOrder).css('display', 'none');
				$('#about-biography-hide-' + suffixV + '_' + clickedOrder).css('display', 'block');
				$('#about-biography-content-' + suffixV + '_' + clickedOrder).css('display', 'block');
			}
			$scope.hideBiography = function (clickedOrder, suffixV) {
				$('#about-biography-review-' + suffixV + '_' + clickedOrder).css('display', 'block');
				$('#about-biography-hide-' + suffixV + '_' + clickedOrder).css('display', 'none');
				$('#about-biography-content-' + suffixV + '_' + clickedOrder).css('display', 'none');
			}
		}
	]);
}());
