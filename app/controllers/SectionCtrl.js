(function () {
	'use strict';

	angular.module('distincta').controller('SectionCtrl', [
		'$scope', '$stateParams', '$rootScope', '$location', '$http', 'ngMeta',
		function ($scope, $stateParams, $rootScope, $location, $http, ngMeta) {
			$scope.section = $stateParams.section;
			$http.get('data_files/' + $stateParams.lang + '_' + $scope.section + '_data.json').then( function (response) {
				$scope.section_data = response.data[0];

				ngMeta.setTitle($scope.section_data.page_title, '');
				for (var tag in $scope.section_data.meta) {
					if (tag.endsWith(':image')) {
						ngMeta.setTag(tag, $location.imageOrigin + $scope.section_data.meta[tag]);
					} else {
						ngMeta.setTag(tag, $scope.section_data.meta[tag]);
					}
				}
			});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.section');
		}
	]);
}());
