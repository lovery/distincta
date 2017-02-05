(function () {
	'use strict';

	angular.module('distincta').controller('AboutPersonCtrl', [
		'$scope', '$stateParams', '$rootScope', '$location', '$http', 'ngMeta',
		function ($scope, $stateParams, $rootScope, $location, $http, ngMeta) {
			$http.get('data_files/' + $stateParams.lang + '_' + $stateParams.person + '.json').then( function (response) {
				$scope.person_data = response.data[0];

				ngMeta.setTitle($scope.person_data.page_title, '');
				for (var tag in $scope.person_data.meta) {
					if (tag.endsWith(':image')) {
						ngMeta.setTag(tag, $location.imageOrigin + $scope.person_data.meta[tag]);
					} else {
						ngMeta.setTag(tag, $scope.person_data.meta[tag]);
					}
				}
			});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.about-person');
		}
	]);
}());
