(function () {
	'use strict';

	angular.module('distincta').controller('ServicesCtrl', [
		'$scope', '$stateParams', '$rootScope', '$location', '$http', 'ngMeta',
		function ($scope, $stateParams, $rootScope, $location, $http, ngMeta) {
			$http.get('data_files/' + $stateParams.lang + '_services_data.json').then( function (response) {
				$scope.services_data = response.data[0];

				ngMeta.setTitle($scope.services_data.page_title, '');
				for (var tag in $scope.services_data.meta) {
					if (tag.endsWith(':image')) {
						ngMeta.setTag(tag, $location.imageOrigin + $scope.services_data.meta[tag]);
					} else {
						ngMeta.setTag(tag, $scope.services_data.meta[tag]);
					}
				}
			});
			$('#distincta-nav-bar').addClass('scrolled');
			allowScrollMenu = false;
			loadAllAnimation('.services');
			$scope.accordeonService = function (clickedOrder) {
				if ($('#collapse_'+clickedOrder).children().hasClass('active')) {
					$('#collapse_'+clickedOrder).children().removeClass('active');
					$('#fa-icon_active_'+clickedOrder).addClass('hidden');
					$('#fa-icon_inactive_'+clickedOrder).removeClass('hidden');
				} else {
					$('#collapse_'+clickedOrder).children().addClass('active');
					$('#fa-icon_inactive_'+clickedOrder).addClass('hidden');
					$('#fa-icon_active_'+clickedOrder).removeClass('hidden');
				}
			}
		}
	]);
}());
