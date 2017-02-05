(function () {
	'use strict';

	angular.module('distincta').controller('NewsItemCtrl', [
		'$scope', '$stateParams', '$rootScope', '$http', '$location', '$window', 'ngMeta',
		function ($scope, $stateParams, $rootScope, $http, $location, $window, ngMeta) {
			$http.get('data_files/news/' + $stateParams.lang + '_' + $stateParams.news_item + '.json')
				.then(function (response) {
					if (typeof data != "string") {
						$scope.news_data = response.data[0];

						ngMeta.setTitle($scope.news_data.page_title, '');
						for (var tag in $scope.news_data.meta) {
							if (tag.endsWith(':image')) {
								ngMeta.setTag(tag, $location.imageOrigin + 'news/' + $scope.news_data.meta[tag]);
							} else {
								ngMeta.setTag(tag, $scope.news_data.meta[tag]);
							}
						}
					} else {
						$window.location.href = '/' + $stateParams.lang + '/home';
					}
				});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.news');
		}
	]);
}());
