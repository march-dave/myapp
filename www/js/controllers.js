angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $window) {

  $scope.data = {};
  $scope.data.duration = 1000;

  $window.navigator.geolocation.getCurrentPosition(function(position) {

    console.log('position', position.coords);

    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    var newObj = {};
    for(var key in position.coords) {
      newObj[key]= position.coords[key];
    }
      $scope.$apply(function() {
        $scope.data.position = newObj;
        // $scope.data.lat = position.coords.latitude;
        // $scope.data.long = position.coords.longitude;
        // position.color = 'blue';
        // console.log('position', newObj);
      });
  }, function(err) {
    console.log('err', err);
  })

  // $scope.duration = 1000;
  $scope.vibrate = function() {
    // $window.navigator.vibrate($scope.duration);
    // var duration = $scope.data.duration;
    // $window.navigator.vibrate([duration]);
    $window.navigator.vibrate(1000);
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  console.log('ChatsCtrl');
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.on('$ionicView.enter', function(e) {
  //   console.log('ChatsCtrl');
  // })

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
