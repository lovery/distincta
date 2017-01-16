(function () {
	'use strict';

	angular.module('distincta').controller('NewsCtrl', [
        '$scope', '$routeParams', '$rootScope', '$http', '$location', '$window',
		function ($scope, $routeParams, $rootScope, $http, $location, $window) {
			$http.get('data_files/' + $routeParams.lang + '_base_data.json').then( function (response) {
				$scope.base_data = response.data[0];
			});
			$http.get('data_files/' + $routeParams.lang + '_news_data.json').then( function (response) {
				if (typeof data != "string") {
					$scope.news_data = response.data[0];
					$rootScope.metainformation.setTitle($scope.news_data.meta_title);
					$rootScope.metainformation.setMetaDescription($scope.news_data.meta_description);
					$rootScope.metainformation.setMetaKeywords($scope.news_data.meta_keywords);
				} else {
					$window.location.href = '/' + $routeParams.lang + '/home';
				}
			});
			$http.get('data_files/news/' + $routeParams.lang + '_news_list.json').then( function (response) {
				$scope.news_list = response.data[0];
			});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.news');
			$scope.tag = $location.hash();
		}
	]);
}());
