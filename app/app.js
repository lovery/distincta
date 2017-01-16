// Define the `Industria` module

(function () {
	'use strict';

	var distincta = angular.module('distincta', ['ngRoute', 'ngResource', 'ngSanitize', '720kb.socialshare']);

	distincta.config(['$routeProvider', '$locationProvider',
	    function($routeProvider, $locationProvider) {
	        $locationProvider.html5Mode(true);
	        $routeProvider.
	            when('/:lang/home', {
	                templateUrl: 'templates/home.html',
	                controller: 'HomeCtrl'
	            }).
	            when('/:lang/about', {
	                templateUrl: 'templates/about.html',
	                controller: 'AboutCtrl'
	            }).
	            when('/:lang/about/:person', {
	                templateUrl: 'templates/about-person.html',
	                controller: 'AboutPersonCtrl'
	            }).
	            when('/:lang/expertise', {
	                templateUrl: 'templates/expertise.html',
	                controller: 'ExpertiseCtrl'
	            }).
	            when('/:lang/services', {
	                templateUrl: 'templates/services.html',
	                controller: 'ServicesCtrl'
	            }).
	            when('/:lang/news', {
	                templateUrl: 'templates/news.html',
	                controller: 'NewsCtrl'
	            }).
	            when('/:lang/news/:news_item', {
	                templateUrl: 'templates/news_item.html',
	                controller: 'NewsItemCtrl'
	            }).
	            when('/:lang/contact', {
	                templateUrl: 'templates/contact.html',
	                controller: 'ContactCtrl'
	            }).
	            otherwise({
	                redirectTo: '/en/home'
	            });
	    }
	]);
}());
