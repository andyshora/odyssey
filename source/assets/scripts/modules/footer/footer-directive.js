/*global angular */

angular.module('dyson')
  .directive('footer', function() {
    'use strict';
    return {
        replace: true,
        restrict: 'A',
        templateUrl: 'assets/scripts/modules/footer/footer-template.html',
        scope: {
          nearby: '@',
          extraSectionLabel: '@',
          extraSectionTargetState: '@',
          extraSectionLabel2: '@',
          extraSectionTargetState2: '@'
        }
      };
  });