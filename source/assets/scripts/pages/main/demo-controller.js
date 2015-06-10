angular.module('dyson')
  .controller('DemoCtrl', function($scope, $state, $rootScope, $timeout, $window, $timeout) {
      
    $window.scrollTo(0, 0);

    var linkData = {
      'main.home': {
        heading: 'Home',
        text: 'Vacuums',
        targetState: 'main.category'
      },
      'main.category': {
        heading: 'Vacuums',
        text: 'Cordless & handheld',
        targetState: 'main.sub-category'
      },
      'main.sub-category': {
        heading: 'Cordless & Handheld',
        text: 'Dyson V6 Absolute',
        targetState: 'main.pdp'
      },
      'main.pdp': {
        heading: 'Dyson V6 Absolute',
        text: 'Add to Basket',
        targetState: 'main.basket'
      },
      'main.basket': {
        heading: 'Basket',
        text: 'Checkout',
        targetState: 'main.checkout'
      },
      'main.checkout': {
        heading: 'Checkout',
        text: 'Home',
        targetState: 'main.home'
      }
    };

    $scope.dummyLink = linkData[$state.current.name];
    $scope.currentState = $state.current.name;

  });