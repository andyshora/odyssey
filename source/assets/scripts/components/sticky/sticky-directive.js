/*global angular */
angular.module('dyson')
  .directive('sticky', function($window, $document, $rootScope, $state) {
    'use strict';

    return {
        restrict: 'A',
/*        scope: {
          stickyModifier: '@',
          stickAt: '@'
        },*/
        link: function(scope, element, attrs) {
          var stickAt = parseInt(attrs.stickAt, 10);
          var hideAt = parseInt(attrs.hideAt, 10);
          var stickyClass = attrs.stickyModifier;
          var stateMatch = attrs.state;
          var body = $document[0].body;
          var offsetWhenSectionExpanded = attrs.offsetWhenSectionExpanded === 'true';
          var offset = 0;

          console.log('stickAt', stickAt);

          if (offsetWhenSectionExpanded) {
            $rootScope.$on('section:expanded', function() {
              offset = 741;
              console.log('offset updated');
            });
          }

          var active = true;

          // only apply sticky modifier when the target state is active
          $rootScope.$on('$stateChangeSuccess', function() {
            // check if this sticky class should only be applied on one state
            if (stateMatch) {
              if ($state.is(stateMatch)) {
                active = true;
              } else {
                active = false;
                angular.element(body).removeClass(stickyClass);
              }
            }

          });

          angular.element($window).bind('scroll', function() {

            if (!active) {
              return;
            }

            var scrollY = $window.scrollY - offset;
            // console.log(scrollY);
            if (scrollY <= stickAt || scrollY > hideAt) {
              angular.element(body).removeClass(stickyClass);
            } else if (scrollY >= stickAt) {
              angular.element(body).addClass(stickyClass);
            }
          });

          // trigger scroll immediately
          var scrollY = $window.scrollY - offset;
          // console.log(scrollY);
          if (scrollY <= stickAt || scrollY > hideAt) {
            angular.element(body).removeClass(stickyClass);
          } else if (scrollY >= stickAt) {
            angular.element(body).addClass(stickyClass);
          }

        }
      };
  });