function calculateSlogan() {
    $('.slogan-bg-image img').css('max-height', window.innerHeight - 100);
    if (window.innerWidth >= window.innerHeight) {
        $('.slogan-bg-image img').css('max-width', window.innerWidth * 4 / 5);
        $('.slogan').css('margin-top', (window.innerHeight - 100) / 2);
    } else {
        $('.slogan-bg-image img').css('max-width', window.innerWidth);
        $('.slogan-title').css('margin-top', (window.innerHeight - 100) / 4);
    }
}

var allowScrollMenu = false;
var loadAllAnimation = function (place) {
    $('.pre-loader').css('display', 'block');
    if (place == '.home') {
        $('footer').hide();
        calculateSlogan();
    }
    setTimeout(function(){
        appMaster.preLoader();
        appMaster.smoothScroll();
        appMaster.screensCarousel();
        appMaster.animateScript();
        appMaster.revSlider();
    }, 500);
}
    
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

distincta.service('MetaInformation', function() {
    var title = 'Distincta - IntelectualProperty Agency';
    var metaDescription = '';
    var metaKeywords = '';
    return {
        title: function() { return title; },
        metaDescription: function() { return metaDescription; },
        metaKeywords: function() { return metaKeywords; },
        reset: function() {
            title = '';
            metaDescription = '';
            metaKeywords = '';
        },
        setTitle: function(newTitle) { title = newTitle; },
        setMetaDescription: function(newMetaDescription) {
            metaDescription = newMetaDescription;
        },
        setMetaKeywords: function(newKeywords) {
            metaKeywords = newKeywords;
        }
    };
});

distincta.controller('BaseCtrl', [
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

distincta.controller('HomeCtrl', [
        '$scope', '$routeParams', '$rootScope', '$http',
    function ($scope, $routeParams, $rootScope, $http) {
        $http.get('data_files/' + $routeParams.lang + '_base_data.json').success( function (data) {
            $scope.base_data = data[0];
            $rootScope.metainformation.setTitle($scope.base_data.meta_title);
            $rootScope.metainformation.setMetaDescription($scope.base_data.meta_description);
            $rootScope.metainformation.setMetaKeywords($scope.base_data.meta_keywords);
        });
        $('#distincta-nav-bar').removeClass('scrolled');
        allowScrollMenu = true;
        loadAllAnimation('.home');
    }
]);

distincta.controller('AboutCtrl', [
        '$scope', '$routeParams', '$rootScope', '$http',
    function ($scope, $routeParams, $rootScope, $http) {
        $http.get('data_files/' + $routeParams.lang + '_base_data.json').success( function (data) {
            $scope.base_data = data[0];
        });
        $http.get('data_files/' + $routeParams.lang + '_about_data.json').success( function (data) {
            $scope.about_data = data[0];
            $rootScope.metainformation.setTitle($scope.about_data.meta_title);
            $rootScope.metainformation.setMetaDescription($scope.about_data.meta_description);
            $rootScope.metainformation.setMetaKeywords($scope.about_data.meta_keywords);
        });
        $('#distincta-nav-bar').addClass('scrolled');
        allowScrollMenu = false;
        loadAllAnimation('.about');
        $scope.showBiography = function (clickedOrder, suffixV) {
            $('#about-biography-review-' + suffixV + '_' + clickedOrder).css('display', 'none');
            $('#about-biography-hide-' + suffixV + '_' + clickedOrder).css('display', 'block');
            $('#about-biography-content-' + suffixV + '_' + clickedOrder).css('display', 'block');
        }
        $scope.hideBiography = function (clickedOrder, suffixV) {
            $('#about-biography-review-' + suffixV + '_' + clickedOrder).css('display', 'block');
            $('#about-biography-hide-' + suffixV + '_' + clickedOrder).css('display', 'none');
            $('#about-biography-content-' + suffixV + '_' + clickedOrder).css('display', 'none');
        }
    }
]);

distincta.controller('AboutPersonCtrl', [
        '$scope', '$routeParams', '$rootScope', '$http',
    function ($scope, $routeParams, $rootScope, $http) {
        $http.get('data_files/' + $routeParams.lang + '_base_data.json').success( function (data) {
            $scope.base_data = data[0];
        });
        $http.get('data_files/' + $routeParams.lang + '_' + $routeParams.person + '.json').success( function (data) {
            $scope.person_data = data[0];
            $rootScope.metainformation.setTitle($scope.person_data.meta_title);
            $rootScope.metainformation.setMetaDescription($scope.person_data.meta_description);
            $rootScope.metainformation.setMetaKeywords($scope.person_data.meta_keywords);
        });
        $('#distincta-nav-bar').addClass('scrolled');
        allowScrollMenu = false;
        loadAllAnimation('.about-person');
    }
]);

distincta.controller('ExpertiseCtrl', [
        '$scope', '$routeParams', '$rootScope', '$http',
    function ($scope, $routeParams, $rootScope, $http) {
        $http.get('data_files/' + $routeParams.lang + '_base_data.json').success( function (data) {
            $scope.base_data = data[0];
        });
        $http.get('data_files/' + $routeParams.lang + '_expertise_data.json').success( function (data) {
            $scope.expertise_data = data[0];
            $rootScope.metainformation.setTitle($scope.expertise_data.meta_title);
            $rootScope.metainformation.setMetaDescription($scope.expertise_data.meta_description);
            $rootScope.metainformation.setMetaKeywords($scope.expertise_data.meta_keywords);
        });
        $('#distincta-nav-bar').addClass('scrolled');
        allowScrollMenu = false;
        loadAllAnimation('.expertise');
    }
]);

distincta.controller('ServicesCtrl', [
        '$scope', '$routeParams', '$rootScope', '$http',
    function ($scope, $routeParams, $rootScope, $http) {
        $http.get('data_files/' + $routeParams.lang + '_base_data.json').success( function (data) {
            $scope.base_data = data[0];
        });
        $http.get('data_files/' + $routeParams.lang + '_services_data.json').success( function (data) {
            $scope.services_data = data[0];
            $rootScope.metainformation.setTitle($scope.services_data.meta_title);
            $rootScope.metainformation.setMetaDescription($scope.services_data.meta_description);
            $rootScope.metainformation.setMetaKeywords($scope.services_data.meta_keywords);
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

distincta.controller('NewsCtrl', [
        '$scope', '$routeParams', '$rootScope', '$http', '$location', '$window',
    function ($scope, $routeParams, $rootScope, $http, $location, $window) {
        $http.get('data_files/' + $routeParams.lang + '_base_data.json').success( function (data) {
            $scope.base_data = data[0];
        });
        $http.get('data_files/' + $routeParams.lang + '_news_data.json').success( function (data) {
            if (typeof data != "string") {
                $scope.news_data = data[0];
                $rootScope.metainformation.setTitle($scope.news_data.meta_title);
                $rootScope.metainformation.setMetaDescription($scope.news_data.meta_description);
                $rootScope.metainformation.setMetaKeywords($scope.news_data.meta_keywords);
            } else {
                $window.location.href = '/' + $routeParams.lang + '/home';
            }
        });
        $http.get('data_files/news/' + $routeParams.lang + '_news_list.json').success( function (data) {
            $scope.news_list = data[0];
        });
        $('#distincta-nav-bar').addClass('scrolled');
        allowScrollMenu = false;
        loadAllAnimation('.news');
        $scope.tag = $location.hash();
    }
]);

distincta.controller('NewsItemCtrl', [
        '$scope', '$routeParams', '$rootScope', '$http', '$window',
    function ($scope, $routeParams, $rootScope, $http, $window) {
        $http.get('data_files/' + $routeParams.lang + '_base_data.json').success( function (data) {
            $scope.base_data = data[0];
        });
        $http.get('data_files/news/' + $routeParams.lang + '_' + $routeParams.news_item + '.json')
            .success(function (data) {
                if (typeof data != "string") {
                    $scope.news_data = data[0];
                    $rootScope.metainformation.setTitle($scope.news_data.meta_title);
                    $rootScope.metainformation.setMetaDescription($scope.news_data.meta_description);
                    $rootScope.metainformation.setMetaKeywords($scope.news_data.meta_keywords);
                } else {
                    $window.location.href = '/' + $routeParams.lang + '/home';
                }
            });
        $('#distincta-nav-bar').addClass('scrolled');
        allowScrollMenu = false;
        loadAllAnimation('.news');
    }
]);

distincta.controller('ContactCtrl', [
        '$scope', '$routeParams', '$rootScope', '$http',
    function ($scope, $routeParams, $rootScope, $http) {
        $http.get('data_files/' + $routeParams.lang + '_base_data.json').success( function (data) {
            $scope.base_data = data[0];
        });
        $http.get('data_files/' + $routeParams.lang + '_contact_data.json').success( function (data) {
            $scope.contact_data = data[0];
            $rootScope.metainformation.setTitle($scope.contact_data.meta_title);
            $rootScope.metainformation.setMetaDescription($scope.contact_data.meta_description);
            $rootScope.metainformation.setMetaKeywords($scope.contact_data.meta_keywords);
        });
        $('#distincta-nav-bar').addClass('scrolled');
        allowScrollMenu = false;
        loadAllAnimation('.contact');
    }
]);

distincta.directive('distinctaNavBar', function($location) {
    return {
        restrict: 'E',
        scope: {
            headerInfo: '=',
            pageSlug: '='
        },
        link: function( $scope, elem, attrs ) {    
            elem.ready(function(){
                $scope.$apply(function(){
                    $scope.no_lang_path = $location.path().substr(3);
                });
            });
        },
        templateUrl: 'templates/distincta-nav-bar.html'
    };
});

distincta.directive('distinctaFooterBar', function($timeout) {
    return {
        restrict: 'E',
        scope: {
            footerInfo: '='
        },
        link: function( $scope, elem, attrs ) {    
            elem.ready(function(){
                $scope.$apply(function(){
                    $timeout(function() {
                        $('footer').css('padding-bottom', window.innerHeight - $('.wrapper').innerHeight() - $('footer').innerHeight() + parseInt($('footer').css('padding-bottom').replace("px", "")));
                    });
                });
            });
        },
        templateUrl: 'templates/distincta-footer-bar.html'
    };
});

distincta.filter('to_trusted', ['$sce', function($sce) {
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

