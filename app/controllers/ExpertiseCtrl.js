(function () {
	'use strict';

	angular.module('distincta').controller('ExpertiseCtrl', [
        '$scope', '$stateParams', '$rootScope', '$location', '$http', 'ngMeta',
		function ($scope, $stateParams, $rootScope, $location, $http, ngMeta) {
			$http.get('data_files/' + $stateParams.lang + '_expertise_data.json').then( function (response) {
				$scope.expertise_data = response.data[0];

				ngMeta.setTitle($scope.expertise_data.page_title, '');
				for (var tag in $scope.expertise_data.meta) {
					if (tag.endsWith(':image')) {
						ngMeta.setTag(tag, $location.imageOrigin + $scope.expertise_data.meta[tag]);
					} else {
						ngMeta.setTag(tag, $scope.expertise_data.meta[tag]);
					}
				}
			});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.expertise');
		}
	]);
}());
