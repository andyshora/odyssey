/*global angular */
angular.module('dyson')
  .directive('focusMe', function($timeout, $parse) {
    'use strict';
    return {
      link: function(scope, element, attrs) {
        var model = $parse(attrs.focusMe);
        scope.$watch(model, function(value) {
          if(value === true) {
            $timeout(function() {
              element[0].focus();
            }, 100);
          }
        });
        element.bind('blur', function() {
          console.log('blur');
          scope.$apply(model.assign(scope, false));
        });
      }
    };
  });