/*global angular */
angular.module('dyson')
  .directive('expandableSection', function() {
    'use strict';

    return {
        replace: true,
        transclude: true,
        restrict: 'A',
        scope: {
          title: '@',
          modifier: '@',
          icon: '@',
          iconOpen: '@',
          theme: '@',
          open: '=',
          openOnHover: '=',
          index: '=',
          onToggled: '&',
          alwaysOpenOnMobile: '@'
        },
        link: function(scope, elm, attrs) {

          scope.open = false;

          scope.lockedOpen = !!attrs.alwaysOpenOnMobile;

          scope.itemsInBasketCount = 0;

          scope.onIconClicked = function() {
            if (scope.icon !== 'basket') {
              return;
            }
            // scope.itemsInBasketCount++;
          }
        },
        controller: function($state, $scope, $timeout) {
          if ($state.is('main.basket') && ($scope.icon === 'basket')) {

            $timeout(function() {
              $scope.itemsInBasketCount = 1;
              console.log('$scope.itemsInBasketCount', $scope.itemsInBasketCount);
            }, 100);
            
          }

          // let the parent scope know that the section has been toggled
          $scope.onTitleClicked = function() {
            $scope.open = !$scope.open;
            $scope.onToggled({ index: $scope.index, open: $scope.open });

            if ($scope.icon === 'basket') {
              $state.go('main.basket');
            }
          };
        },
        templateUrl: 'assets/scripts/components/expandable-section/expandable-section-template.html'
      };
  });