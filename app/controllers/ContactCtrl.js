(function () {
	'use strict';

	angular.module('distincta').controller('ContactCtrl', [
		'$scope', '$stateParams', '$rootScope', '$location', '$http', 'ngMeta',
		function ($scope, $stateParams, $rootScope, $location, $http, ngMeta) {
			$http.get('data_files/' + $stateParams.lang + '_contact_data.json').then( function (response) {
				$scope.contact_data = response.data[0];

				ngMeta.setTitle($scope.contact_data.page_title, '');
				for (var tag in $scope.contact_data.meta) {
					if (tag.endsWith(':image')) {
						ngMeta.setTag(tag, $location.imageOrigin + $scope.contact_data.meta[tag]);
					} else {
						ngMeta.setTag(tag, $scope.contact_data.meta[tag]);
					}
				}
			});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.contact');
		}
	]);
}());
