/*global angular */

var genericContent = {
  templateUrl: 'assets/scripts/modules/dummy/dummy-template.html'
};
var footerContent = {
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
      .state('main.category', {
        url: 'category',
        controller: 'MainCtrl',
        views: {
          'header@': {
            templateUrl: 'assets/scripts/modules/header/header-template.html',
            controller: 'HeaderCtrl'
          },
          'content@': genericContent,
          'footer@': genericFooter
        }
      })
      .state('otherwise', {
        url: '/',
        templateUrl: 'assets/scripts/pages/main/main-template.html',
        controller: 'MainCtrl'
      });

  });