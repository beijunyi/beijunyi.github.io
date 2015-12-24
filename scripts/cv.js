app.controller('CvCtrl', function($scope, $route, $location) {
  var params = $location.search();
  $scope.phone = params.phone;
});