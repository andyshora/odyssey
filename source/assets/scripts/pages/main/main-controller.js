angular.module('dyson')
  .controller('MainCtrl', function($scope, $state, $rootScope, $timeout, $window, $timeout) {
    $scope.navProducts = [
      { type: 'vacuum', name: 'Uprights' },
      { type: 'vacuum', name: 'Cylinders' },
      { type: 'vacuum', name: 'Cordless' },
      { type: 'vacuum', name: 'Handhelds' },
      { type: 'vacuum', name: 'Tools' },
      { type: 'fan', name: 'Cool' },
      { type: 'fan', name: 'Hot + Cool' },
      { type: 'fan', name: 'Humidifier' },
      { type: 'dryer', name: 'Airblade dB' },
      { type: 'dryer', name: 'Airblade V' },
      { type: 'dryer', name: 'Airblade Tap' }
    ];

    $scope.navItems = [
      { name: 'Sale' },
      { name: 'Vacuum' },
      { name: 'Fan and heaters' },
      { name: 'Lightning' },
      { name: 'Hand dryers' },
      { name: 'Accessories' },
      { name: 'Help me choose' }
    ];

    angular.element($window).bind('scroll', function() {
      if ($window.scrollY < 58) {
        $rootScope.$broadcast('scroll:top');
      }
    });

    $rootScope.preloading = true;
    $rootScope.preloading2 = true; // mirrors above 1s after
    preloadImages();

    // $timeout(function() {
    //   $rootScope.preloading = false;
    //   $rootScope.$apply();
    // }, 2000);

    $rootScope.$watch('preloading', function(val) {
      if (val) {
        return;
      }
      $timeout(function() {
        $rootScope.preloading2 = val;
        $rootScope.$apply();
      }, 1000);
    });

    $rootScope.$on('section:expanded', function() {
      $scope.expanded = true;
    });

    // load new customer 1 journey by default
    if (!$state.current.name) {
      $state.transitionTo('main.new-cust-1');
    }

    $scope.searchOpen = false;
    $scope.transitioningState = false;

    $rootScope.$on('$stateChangeStart', function() {
      $scope.transitioningState = true;

    });

    $scope.navState = '';

    $rootScope.$on('$stateChangeSuccess', function() {
      $scope.hideTabs = /main.category$|main.product$|main.retailer$|main.retailer-detail$|main.finder$|main.tools$|main.finder-results$|main.accessories$|main.basket$|main.filters$|main.compare$|main.compare-results$|main.sales/.test($state.current.name);


      if ($state.is('main.retailer') || $state.is('main.retailer-details') || $state.is('main.filters')) {
        $scope.navState = 'retailer';
      } else if ($state.is('main.basket') || $state.is('main.accessories') || $state.is('main.sales')) {
        $scope.navState = 'basket';
      } else {
        $scope.navState = '';
      }

      // if ($state.is('main.category')) {
      //   $scope.navOpen = false;
      // }
      // console.log('$scope.hideTabs -> ', $scope.hideTabs);
      $timeout(function() {
        $scope.transitioningState = false;
      }, 200);

    });

    $scope.bodyStyles = {};

    $scope.$watch('searchOpen', function(searchOpen) {
      if (searchOpen) {

        var windowHeight = window.innerHeight;
        if (windowHeight < 557) {
          windowHeight = 557;
        }

        $scope.bodyStyles = {
          height: windowHeight + 'px',
          overflow: 'hidden'
        };

        $timeout(function() {
          document.getElementById('search').focus();
        }, 500);

      } else {
        $scope.bodyStyles = {};

        $timeout(function() {
          if (document.getElementById('search')) {
            document.getElementById('search').blur();

          }
        }, 500);
      }
    });

    $scope.$watch('navOpen', function(navOpen) {
      if (navOpen) {

        var windowHeight = window.innerHeight;
        if (windowHeight < 557) {
          windowHeight = 557;
        }

        $scope.bodyStyles = {
          height: windowHeight + 'px'/*,
          overflow: 'hidden'*/
        };

      } else {
        $scope.bodyStyles = {};
      }
    });

    function preloadImages() {
      // preload all images
      var imageBasePath = '/assets/images/';
      var imagesArr = [
        // 'rga.png'
      ];

      if (!imagesArr.length) {
        $rootScope.preloading = false;
        return;
      }
      var $imgContainer = document.getElementById('preload-img-container');

      var imagesLoaded = 0;
      var $bar = document.getElementById('preloader-bar__bar');
      var barChunk = 100 / imagesArr.length;

      for (var i = 0; i < imagesArr.length; i++) {
        var img = new Image();
        img.onload = function() {
          imagesLoaded++;

          // update bar
          $bar.style.width = (imagesLoaded * barChunk) + '%';

          if (imagesLoaded === imagesArr.length-1) {
            $rootScope.preloading = false;
            $rootScope.$apply();
          }
        };
        img.src = imageBasePath + imagesArr[i];

        // $imgContainer.appendChild(img);
      }
    }

  });