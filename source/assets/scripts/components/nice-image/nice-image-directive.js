/*global angular */
angular.module('dyson')
  .directive('niceImage', function() {
    'use strict';

    return {
      link: function(scope, element, attrs) {

        element.removeClass('nice-image--loaded');

        element.addClass('nice-image');
        element.bind('load', function(e) {
          // image loaded
          element.addClass('nice-image--loaded');
        });
      }
    };
  });