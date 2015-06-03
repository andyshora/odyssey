/*global angular */
angular.module('dyson')
  .directive('sectionItemDirective', function() {
    'use strict';

    return {
        replace: true,
        transclude: true,
        restrict: 'A',
        scope: {
          closedIcon: '@',
          openIcon: '@',
          open: '='
        },
        templateUrl: 'assets/scripts/components/section-item/section-item-template.html'
      };
  });
