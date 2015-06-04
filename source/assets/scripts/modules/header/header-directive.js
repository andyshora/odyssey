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
          scope.expandableSectionOpen = [false, false, false, false, false, false, false, false];

          scope.onToggleClicked = function() {
            scope.navOpen = !scope.navOpen;
          }

          scope.closeAllSectionsExcept = function(excludeIndex) {
            console.log('closeAllSectionsExcept');
            for (var i = 0; i < scope.expandableSectionOpen.length; i++) {
              if (i !== excludeIndex) {
                scope.expandableSectionOpen[i] = false;
              }
            }

          }

          scope.onSectionToggled = function(index, open) {
            
            if (open) {
              scope.closeAllSectionsExcept(index);
            }

          }

          /*scope.$watch('expandableSectionOpen', function(val) {
            console.log(val);
          }, true);*/

        },
        controller: function($rootScope, $scope) {
          $rootScope.$on('app:resize', function() {
            $scope.closeAllSectionsExcept(-1);
            $scope.navOpen = false;
            $scope.$apply();
          });
        },
        templateUrl: 'assets/scripts/modules/header/header-template.html'
      };
  });