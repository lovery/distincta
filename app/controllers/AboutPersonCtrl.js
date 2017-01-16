(function () {
	'use strict';

	angular.module('distincta').controller('AboutPersonCtrl', [
		'$scope', '$routeParams', '$rootScope', '$http',
		function ($scope, $routeParams, $rootScope, $http) {
			$http.get('data_files/' + $routeParams.lang + '_base_data.json').then( function (response) {
				$scope.base_data = response.data[0];
			});
			$http.get('data_files/' + $routeParams.lang + '_' + $routeParams.person + '.json').then( function (response) {
				$scope.person_data = response.data[0];
				$rootScope.metainformation.setTitle($scope.person_data.meta_title);
				$rootScope.metainformation.setMetaDescription($scope.person_data.meta_description);
				$rootScope.metainformation.setMetaKeywords($scope.person_data.meta_keywords);
			});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.about-person');
		}
	]);
}());
