// Define the `Industria` module

(function () {
	'use strict';

	var distincta = angular.module('distincta', ['ui.router', 'ngSanitize', '720kb.socialshare', 'ngMeta']);

	distincta.run(['ngMeta',
		function(ngMeta) {
			ngMeta.init();
		}
	]);

	distincta.config(['$stateProvider', '$locationProvider', 'ngMetaProvider',
		function($stateProvider, $locationProvider, ngMetaProvider) {
			$locationProvider.html5Mode(true);

			ngMetaProvider.useTitleSuffix(true);
			ngMetaProvider.setDefaultTitleSuffix(' - INDUSTRIA');

			$stateProvider
				.state('base', {
					url: '/{lang}',
					templateUrl: 'templates/base.html',
					controller: 'BaseCtrl'
				})
				.state('base.home', {
					url: '/home',
					templateUrl: 'templates/home.html',
					controller: 'HomeCtrl'
				})
				.state('base.about', {
					url: '/about',
					templateUrl: 'templates/about.html',
					controller: 'AboutCtrl'
				})
				.state('base.person', {
					url: '/about/{person}',
					templateUrl: 'templates/about-person.html',
					controller: 'AboutPersonCtrl'
				})
				.state('base.expertise', {
					url: '/expertise',
					templateUrl: 'templates/expertise.html',
					controller: 'ExpertiseCtrl'
				})
				.state('base.services', {
					url: '/services',
					templateUrl: 'templates/services.html',
					controller: 'ServicesCtrl'
				})
				.state('base.news', {
					url: '/news',
					templateUrl: 'templates/news.html',
					controller: 'NewsCtrl'
				})
				.state('base.news_items', {
					url: '/news/{news_item}',
					templateUrl: 'templates/news_item.html',
					controller: 'NewsItemCtrl'
				})
				.state('base.contact', {
					url: '/contact',
					templateUrl: 'templates/contact.html',
					controller: 'ContactCtrl'
				});
		}
	]);
}());
