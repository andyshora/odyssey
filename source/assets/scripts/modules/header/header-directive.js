/*global angular */

angular.module('dyson')
  .directive('header', function() {
    'use strict';
    return {
        replace: true,
        restrict: 'A',
        scope: {
          navOpen: '=',
          navProducts: '=',
          navItems: '=',
          searchOpen: '='
        },
        link: function(scope) {
          scope.navOpen = false;
          
          scope.onToggleClicked = function() {
            scope.navOpen = !scope.navOpen;
          }
        },
        templateUrl: 'assets/scripts/modules/header/header-template.html'
      };
  });