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
			};
		}
	]);
}());
