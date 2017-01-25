(function () {
	'use strict';

	angular.module('distincta').controller('BaseCtrl', [
		'$scope', '$stateParams', '$rootScope', '$http', '$location', 'ngMeta',
		function ($scope, $stateParams, $rootScope, $http, $location, ngMeta) {
			$http.get('data_files/' + $location.path().substr(1, 2) + '_base_data.json').then( function (response) {
				$scope.base_data = response.data[0];

				ngMeta.setDefaultTag('author', $scope.base_data.meta.author);
				ngMeta.setDefaultTag('og:url', $location.absUrl());
				$location.imageOrigin = $location.protocol() + '://' + $location.host() + '/img/';
				ngMeta.setDefaultTag('og:image', $location.imageOrigin + $scope.base_data.meta['og:image']);
				ngMeta.setDefaultTag('og:type', $scope.base_data.meta['og:type']);
			});
			$scope.host = $location.host();
		}
	]);
}());
