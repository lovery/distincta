(function () {
	'use strict';

	angular.module('distincta').controller('BaseCtrl', [
		'$scope', '$routeParams', '$rootScope', '$http', '$location', 'MetaInformation',
		function ($scope, $routeParams, $rootScope, $http, $location, MetaInformation) {
			$rootScope.metainformation = MetaInformation;
			$scope.lang = $routeParams.lang;
			$scope.base_data = [];
			$scope.about_data = [];
			$scope.expertise_data = [];
			$scope.services_data = [];
			$scope.news_data = [];
			$scope.news_list = [];
			$scope.contact_data = [];
			$scope.host = $location.host();
		}
	]);
}());
