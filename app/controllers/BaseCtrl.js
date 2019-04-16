(function () {
	'use strict';

	angular.module('distincta').controller('BaseCtrl', [
		'$scope', '$stateParams', '$rootScope', '$http', '$location', 'ngMeta',
		function ($scope, $stateParams, $rootScope, $http, $location, ngMeta) {
			$http.get('data_files/' + $location.path().substr(1, 2) + '_base_data.json').then( function (response) {
				$scope.base_data = response.data[0];
				$scope.base_data.currentYear = (new Date()).getFullYear();

				ngMeta.setDefaultTag('author', $scope.base_data.meta.author);
				ngMeta.setDefaultTag('og:url', $location.absUrl());
				ngMeta.setDefaultTag('twitter:url', $location.absUrl());
				ngMeta.setDefaultTag('og:locale', $scope.base_data.meta['og:locale']);
				$location.imageOrigin = $location.protocol() + '://' + $location.host() + '/img/';
				ngMeta.setDefaultTag('og:image', $location.imageOrigin + $scope.base_data.meta['og:image']);
				ngMeta.setDefaultTag('twitter:image', $location.imageOrigin + $scope.base_data.meta['og:image']);
				ngMeta.setDefaultTag('og:image:width', $scope.base_data.meta['og:image:width']);
				ngMeta.setDefaultTag('og:image:height', $scope.base_data.meta['og:image:height']);
				ngMeta.setDefaultTag('og:type', $scope.base_data.meta['og:type']);
				ngMeta.setDefaultTag('twitter:card', $scope.base_data.meta['twitter:card']);
			});
			$scope.host = $location.host();
		}
	]);
}());
