(function () {
	'use strict';

	angular.module('distincta').controller('NewsItemCtrl', [
		'$scope', '$routeParams', '$rootScope', '$http', '$window',
		function ($scope, $routeParams, $rootScope, $http, $window) {
			$http.get('data_files/' + $routeParams.lang + '_base_data.json').then( function (response) {
				$scope.base_data = response.data[0];
			});
			$http.get('data_files/news/' + $routeParams.lang + '_' + $routeParams.news_item + '.json')
				.then(function (response) {
					if (typeof data != "string") {
						$scope.news_data = response.data[0];
						$rootScope.metainformation.setTitle($scope.news_data.meta_title);
						$rootScope.metainformation.setMetaDescription($scope.news_data.meta_description);
						$rootScope.metainformation.setMetaKeywords($scope.news_data.meta_keywords);
					} else {
						$window.location.href = '/' + $routeParams.lang + '/home';
					}
				});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.news');
		}
	]);
}());
