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
        controller: function($scope, $state) {
          $scope.stateName = $state.current.name;
          console.log('$scope.stateName', $scope.stateName);
        },
        templateUrl: 'assets/scripts/components/sticky-nav-section/sticky-nav-section-template.html'
      };
  });
