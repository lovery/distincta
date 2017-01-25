(function () {
	'use strict';

	angular.module('distincta').controller('HomeCtrl', [
		'$scope', '$stateParams', '$rootScope', '$location', '$http', 'ngMeta',
		function ($scope, $stateParams, $rootScope, $location, $http, ngMeta) {
			$http.get('data_files/' + $stateParams.lang + '_home_data.json').then( function (response) {
				$scope.home_data = response.data[0];

				ngMeta.setTitle($scope.home_data.page_title, '');
				for (var tag in $scope.home_data.meta) {
					ngMeta.setTag(tag, $scope.home_data.meta[tag]);
					if (tag == 'og:image') {
						ngMeta.setTag('og:image', $location.imageOrigin + $scope.home_data.meta[tag]);
					}
				}
			});
			$('#distincta-nav-bar').removeClass('scrolled');
			allowScrollMenu = true;
			loadAllAnimation('.home');
		}
	]);
}());
