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
        /*'pdp/1.jpg',
        'pdp/2.jpg',
        'pdp/4.jpg',
        'pdp/5.jpg',
        'pdp/6.jpg',
        'my-dyson/reveal.jpg',
        'my-dyson/login.jpg',
        'my-dyson/MyDyson-bottom.jpg',
        'my-dyson/MyDyson-Tools-Dusting.jpg',
        'my-dyson/MyDyson-Tools-FlexiCrevice.jpg',
        'my-dyson/MyDyson-Tools-GroomTool.jpg',
        'my-dyson/MyDyson-Tools-TurbineTool.jpg',
        'my-dyson/MyDyson-top.jpg',
        'find-retailer/bar-list.jpg',
        'find-retailer/bar-map.jpg',
        'find-retailer/list.jpg',
        'find-retailer/machine.jpg',
        'find-retailer/map.jpg',
        'find-retailer/top.jpg',
        'find-retailer/detail.jpg',
        'find-retailer/results.jpg',
        'find-retailer/filters-selected.jpg',
        'finder/results.jpg',
        'uprights/Uprights-bigball.jpg',
        'uprights/Uprights-DC41Mk2Animal.jpg',
        'uprights/Uprights-DC41Mk2-MultiFloor.jpg',
        'uprights/Uprights-DC50Animal2015.jpg',
        'uprights/Uprights-DC50MultiFloor2015.jpg',
        'uprights/Uprights-DC40MultiFloor2015.jpg',
        'uprights/Uprights-DC40Animal2015.jpg',
        'static/cats-grid.png',
        'icons-sprite.png',
        'products-sprite.jpg',
        'discover/bg1.jpg',
        'discover/bg2.jpg',
        'discover/bg3.jpg',
        'discover/1.jpg',
        'discover/2.jpg',
        'discover/2-copy.png',
        'discover/3.jpg',
        'discover/4.jpg',
        'discover/5.jpg',
        'discover/6.jpg',
        'discover/7.jpg',
        'discover/slider-1.jpg',
        'discover/slider-2.jpg',
        'finder/intro.jpg',
        'static/nearby-retailers.png',
        'basket/1.jpg',
        'basket/sticky.jpg',
        'accessories/1.jpg',
        'accessories/a1.jpg',
        'accessories/a2.jpg',
        'accessories/a3.jpg',
        'accessories/a4.jpg',
        'accessories/a5.jpg',
        'accessories/a6.jpg',
        'accessories/a7.jpg',
        'accessories/a8.jpg',
        'compare/results.jpg',
        'compare/c1.jpg',
        'compare/c2.jpg',
        'compare/c3.jpg',
        'compare/c4.jpg',
        'compare/c5.jpg',
        'compare/c6.jpg',
        'compare/c7.jpg',
        'compare/c8.jpg',
        'accessories/add.jpg',
        'accessories/sprite.jpg',
        'sales/1.jpg',
        'welcome/1.jpg'*/
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