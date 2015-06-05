/*global angular */
angular.module('dyson')
  .directive('sectionItem', function() {
    'use strict';

    return {
        replace: true,
        restrict: 'A',
        scope: {
          closedIcon: '@',
          openIcon: '@',
          open: '=',
          title: '@'
        },
        templateUrl: 'assets/scripts/components/section-item/section-item-template.html'
      };
  });
