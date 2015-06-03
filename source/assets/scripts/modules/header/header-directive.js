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
          scope.onPanelTriggerClicked = function(panelName) {
            console.log('onPanelTriggerClicked', panelName);
            scope.openPanel = panelName;
          }
        },
        templateUrl: 'assets/scripts/modules/header/header-template.html'
      };
  });