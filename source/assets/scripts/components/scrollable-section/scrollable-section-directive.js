/*global angular */
angular.module('dyson')
  .directive('scrollableSection', function() {
    'use strict';

    return {
        replace: true,
        transclude: true,
        restrict: 'A',
        scope: {
          modifier: '@'
        },
        link: function(scope, elm, attrs) {

          
        },
        templateUrl: 'assets/scripts/components/scrollable-section/scrollable-section-template.html'
      };
  });