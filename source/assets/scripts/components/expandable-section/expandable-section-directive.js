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
          open: '=',
          index: '=',
          onToggled: '&'
          /*,
          icon: '@',
          onHeaderTapped: '&',
          onContentTapped: '&',
          expandedSectionImage: '@',*/
        },
        link: function(scope) {

          scope.open = false;

          scope.onTitleClicked = function() {
            scope.open = !scope.open;
            scope.onToggled({ index: scope.index, open: scope.open });
          }
        },
        templateUrl: 'assets/scripts/components/expandable-section/expandable-section-template.html'
      };
  });