(function () {
	'use strict';

	angular.module('distincta').controller('AboutCtrl', [
		'$scope', '$stateParams', '$rootScope', '$location', '$http', 'ngMeta',
		function ($scope, $stateParams, $rootScope, $location, $http, ngMeta) {
			$http.get('data_files/' + $stateParams.lang + '_about_data.json').then( function (response) {
				$scope.about_data = response.data[0];

				ngMeta.setTitle($scope.about_data.page_title, '');
				for (var tag in $scope.about_data.meta) {
					if (tag.endsWith(':image')) {
						ngMeta.setTag(tag, $location.imageOrigin + $scope.about_data.meta[tag]);
					} else {
						ngMeta.setTag(tag, $scope.about_data.meta[tag]);
					}
				}
			});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.about');
		}
	]);
}());
