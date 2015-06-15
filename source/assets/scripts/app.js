/*global angular */

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
        controller: 'MainCtrl',
        views: {
          'content@': {
            templateUrl: 'assets/scripts/modules/dummy/dummy-template.html',
            controller: 'DemoCtrl'
          },
          'footer@': {
            templateUrl: 'assets/scripts/modules/footer/footer-template.html'
          }
        }
      })
      .state('otherwise', {
        url: '/',
        templateUrl: 'assets/scripts/pages/main/main-template.html',
        controller: 'MainCtrl'
      });

  });