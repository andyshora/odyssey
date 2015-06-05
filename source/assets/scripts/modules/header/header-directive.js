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
            if (scope.navOpen) {
              scope.closeAllSectionsExcept(-1);
            }
          }

          scope.onSectionToggled = function(index, open) {
            if (open) {
              scope.closeAllSectionsExcept(index);

              if (index > 4) {
                scope.navOpen = false;
              }
            }
          }


        },
        controller: function($rootScope, $scope, $window) {
          $rootScope.$on('app:resize', function() {
            if ($window.innerWidth > 700) {
              $scope.closeAllSectionsExcept(-1);
              $scope.navOpen = false;
              $scope.$apply();
            }
            
          });

          $scope.closeAllSectionsExcept = function(excludeIndex) {
            console.log('closeAllSectionsExcept');

            // never close 0 on mobile
            var startIndex = ($window.innerWidth < 1000) ? 1 : 0;
            
            for (var i = startIndex; i < $scope.expandableSectionOpen.length; i++) {
              if (i !== excludeIndex) {
                $scope.expandableSectionOpen[i] = false;
              }
            }

          }
        },
        templateUrl: 'assets/scripts/modules/header/header-template.html'
      };
  });