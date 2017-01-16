(function () {
	'use strict';

	angular.module('distincta').controller('ServicesCtrl', [
		'$scope', '$routeParams', '$rootScope', '$http',
		function ($scope, $routeParams, $rootScope, $http) {
			$http.get('data_files/' + $routeParams.lang + '_base_data.json').then( function (response) {
				$scope.base_data = response.data[0];
			});
			$http.get('data_files/' + $routeParams.lang + '_services_data.json').then( function (response) {
				$scope.services_data = response.data[0];
				$rootScope.metainformation.setTitle($scope.services_data.meta_title);
				$rootScope.metainformation.setMetaDescription($scope.services_data.meta_description);
				$rootScope.metainformation.setMetaKeywords($scope.services_data.meta_keywords);
			});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.services');
			$scope.accordeonService = function (clickedOrder) {
				if ($('#collapse_'+clickedOrder).children().hasClass('active')) {
					$('#collapse_'+clickedOrder).children().removeClass('active');
					$('#fa-icon_active_'+clickedOrder).addClass('hidden');
					$('#fa-icon_inactive_'+clickedOrder).removeClass('hidden');
				} else {
					$('#collapse_'+clickedOrder).children().addClass('active');
					$('#fa-icon_inactive_'+clickedOrder).addClass('hidden');
					$('#fa-icon_active_'+clickedOrder).removeClass('hidden');
				}
			}
		}
	]);
}());
