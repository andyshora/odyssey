/*global angular */

/**
 * Directive that places focus on the element it is applied to when the
 * expression it binds to evaluates to true
 */
angular.module('dyson')
  .directive('nav2', function() {
    'use strict';

    return {
        replace: true,
        restrict: 'A',
        scope: {
          open: '=',
          navProducts: '=',
          navItems: '=',
          searchOpen: '=',
          activeHeaderItem: '='
        },
        link: function(scope, element, attrs) {
          scope.expandedItemIndex = 0;
          scope.disableTransition = false;

          scope.onHeaderItemClicked = function(itemName) {

            scope.open = false;

            if (scope.activeHeaderItem === itemName) {
              scope.activeHeaderItem = '';
            } else {
              scope.activeHeaderItem = itemName;
              
            }
          };

          scope.onTapped = function(i) {

            if (scope.expandedItemIndex === i) {
              scope.expandedItemIndex = -1;
            } else {
              scope.expandedItemIndex = i;
            }

          };

          console.log('nav2');


        },
        controller: function($scope, $timeout) {
          $scope.onProductClicked = function() {
            $timeout(function() {
              $scope.open = false;
            }, 100);

          };

          $scope.$watch('open', function(open) {
            if (open) {
              $timeout(function() {
                // we dont want to show a transition when closing the nav
                $scope.disableTransition = true;
              }, 500);
            } else {
              $timeout(function() {
                // re-enable transitions
                $scope.disableTransition = false;
              }, 500);
              
            }
          });
        },
        templateUrl: 'assets/scripts/modules/nav-2/nav-2-template.html'
      };

  });