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
        // templateUrl: 'assets/scripts/pages/main/main-template.html',
        controller: 'MainCtrl'
      })
      .state('main.shop', {
        url: 'shop',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/shop/shop-template.html',
            controller: 'ShopCtrl'
          }
        }
      })
      .state('main.my-dyson', {
        url: 'my-dyson',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/my-dyson/my-dyson-template.html',
            controller: 'MyDysonCtrl'
          }
        }
      })
      .state('main.finder', {
        url: 'finder',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/finder/finder-template.html',
            controller: 'FinderCtrl'
          }
        }
      })
      .state('main.sales', {
        url: 'sales',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/sales/sales-template.html',
            controller: 'SalesCtrl'
          }
        }
      })
      .state('main.compare', {
        url: 'compare',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/compare/compare-template.html',
            controller: 'CompareCtrl'
          }
        }
      })
      .state('main.compare-results', {
        url: 'compare-results',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/compare-results/compare-results-template.html',
            controller: 'CompareResultsCtrl'
          }
        }
      })
      .state('main.welcome', {
        url: 'welcome',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/welcome/welcome-template.html',
            controller: 'WelcomeCtrl'
          }
        }
      })
      .state('main.finder-intro', {
        url: 'finder-intro',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/finder-intro/finder-intro-template.html',
            controller: 'FinderIntroCtrl'
          }
        }
      })
      .state('main.finder-results', {
        url: 'finder-results',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/finder-results/finder-results-template.html',
            controller: 'FinderResultsCtrl'
          }
        }
      })
      .state('main.retailer', {
        url: 'find-a-retailer/:selected',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/retailer/retailer-template.html',
            controller: 'RetailerCtrl'
          }
        }
      })
      .state('main.filters', {
        url: 'find-a-retailer-filters',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/retailer-filters/retailer-filters-template.html',
            controller: 'FiltersCtrl'
          }
        }
      })
      .state('main.retailer-detail', {
        url: 'retailer',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/retailer-detail/retailer-detail-template.html',
            controller: 'RetailerDetailCtrl'
          }
        }
      })
      .state('main.tools', {
        url: 'tools',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/tools/tools-template.html',
            controller: 'ToolsCtrl'
          }
        }
      })
      .state('main.accessories', {
        url: 'accessories',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/accessories/accessories-template.html',
            controller: 'AccessoriesCtrl'
          }
        }
      })
      .state('main.basket', {
        url: 'basket',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/basket/basket-template.html',
            controller: 'BasketCtrl'
          }
        }
      })
      .state('main.login', {
        url: 'login',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/login/login-template.html',
            controller: 'LoginCtrl'
          }
        }
      })
      .state('main.product', {
        url: 'product',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/product/product-template.html',
            controller: 'ProductCtrl'
          }
        }
      })
      .state('main.category', {
        url: 'category',
        controller: 'MainCtrl',
        views: {
          'main@': {
            templateUrl: 'assets/scripts/pages/category/category-template.html',
            controller: 'CategoryCtrl'
          }
        }
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
      .state('otherwise', {
        url: '/',
        templateUrl: 'assets/scripts/pages/main/main-template.html',
        controller: 'MainCtrl'
      });



  });