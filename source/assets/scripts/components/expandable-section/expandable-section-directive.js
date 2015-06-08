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
          theme: '@',
          open: '=',
          index: '=',
          onToggled: '&',
          alwaysOpenOnMobile: '@'
        },
        link: function(scope, elm, attrs) {

          scope.open = false;

          scope.lockedOpen = !!attrs.alwaysOpenOnMobile;

          // let the parent scope know that the section has been toggled
          scope.onTitleClicked = function() {
            scope.open = !scope.open;
            scope.onToggled({ index: scope.index, open: scope.open });
          }
        },
        templateUrl: 'assets/scripts/components/expandable-section/expandable-section-template.html'
      };
  });