/*global angular */
angular.module('dyson')
  .directive('expandableSection', function() {
    'use strict';

    return {
        replace: true,
        transclude: true,
        restrict: 'A',
        scope: {
          open: '=',
          title: '@',
          icon: '@',
          modifier: '@',
          onHeaderTapped: '&'
          /*
          onContentTapped: '&',
          expandedSectionImage: '@',*/
        },
        templateUrl: 'assets/scripts/components/expandable-section/expandable-section-template.html'
      };
  });