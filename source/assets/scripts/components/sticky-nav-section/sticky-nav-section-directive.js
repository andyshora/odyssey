/*global angular */
angular.module('dyson')
  .directive('stickyNavSection', function() {
    'use strict';

    return {
        replace: true,
        transclude: true,
        restrict: 'A',
        scope: {
          modifier: '@',
          stickAt: '='
        },
        link: function(scope, elm, attrs) {
          scope.open = false;
          scope.onTitleClicked = function() {
            alert('click');
          };
          // scope.stickNavAt = 700;
        },
        templateUrl: 'assets/scripts/components/sticky-nav-section/sticky-nav-section-template.html'
      };
  });
