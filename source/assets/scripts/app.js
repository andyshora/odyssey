/*global angular */

var genericContent = {
  templateUrl: 'assets/scripts/modules/dummy/dummy-template.html'
};
var genericFooter = {
  templateUrl: 'assets/scripts/modules/footer/footer-template.html'
};

/**
 * The main app module
 *
 * @type {angular.Module}
 */
angular.module('dyson', ['ui.router', 'ngTouch'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    'use strict';

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });

    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl'
      })
      .state('main.new-cust-1', {
        url: 'new-cust-1',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/new-cust-1/new-cust-1-template.html',
            controller: 'NewCust1Ctrl'
          }
        }
      })
      .state('main.home', {
        url: 'home',
        controller: 'MainCtrl',
        views: {
          'content@': {
            templateUrl: 'assets/scripts/modules/dummy/dummy-template.html',
            controller: 'DemoCtrl'
          },
          'footer@': genericFooter
        }
      })
      .state('main.category', {
        url: 'vacuums',
        controller: 'MainCtrl',
        views: {
          'content@': {
            templateUrl: 'assets/scripts/modules/dummy/dummy-template.html',
            controller: 'DemoCtrl'
          },
          'footer@': genericFooter
        }
      })
      .state('main.sub-category', {
        url: 'cordless-and-handheld',
        controller: 'MainCtrl',
        views: {
          'content@': {
            templateUrl: 'assets/scripts/modules/dummy/dummy-template.html',
            controller: 'DemoCtrl'
          },
          'footer@': genericFooter
        }
      })
      .state('main.pdp', {
        url: 'dyson-v6-absolute',
        controller: 'MainCtrl',
        views: {
          'content@': {
            templateUrl: 'assets/scripts/modules/dummy/dummy-template.html',
            controller: 'DemoCtrl'
          },
          'footer@': genericFooter
        }
      })
      .state('main.basket', {
        url: 'basket',
        controller: 'MainCtrl',
        views: {
          'content@': {
            templateUrl: 'assets/scripts/modules/dummy/dummy-template.html',
            controller: 'DemoCtrl'
          },
          'footer@': genericFooter
        }
      })
      .state('main.checkout', {
        url: 'checkout',
        controller: 'MainCtrl',
        views: {
          'content@': {
            templateUrl: 'assets/scripts/modules/dummy/dummy-template.html',
            controller: 'DemoCtrl'
          },
          'footer@': genericFooter
        }
      })
      .state('otherwise', {
        url: '/',
        templateUrl: 'assets/scripts/pages/main/main-template.html',
        controller: 'MainCtrl'
      });

  });