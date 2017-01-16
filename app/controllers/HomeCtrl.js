(function () {
	'use strict';

	angular.module('distincta').controller('HomeCtrl', [
		'$scope', '$routeParams', '$rootScope', '$http',
		function ($scope, $routeParams, $rootScope, $http) {
			$http.get('data_files/' + $routeParams.lang + '_base_data.json').then( function (response) {
				$scope.base_data = response.data[0];
				$rootScope.metainformation.setTitle($scope.base_data.meta_title);
				$rootScope.metainformation.setMetaDescription($scope.base_data.meta_description);
				$rootScope.metainformation.setMetaKeywords($scope.base_data.meta_keywords);
			});
			$('#distincta-nav-bar').removeClass('scrolled');
			allowScrollMenu = true;
			loadAllAnimation('.home');
		}
	]);
}());
