app.controller('CvCtrl', function($scope, $route, $location, $uibModal) {
  var params = $location.search();
  $scope.phone = params.phone;

  $scope.secretHash = 885602322;
  $scope.revealSecret = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'partials/reveal-secret.html',
      controller: function() {

      },
      size: 'sm',
      resolve: {
      }
    });
  }
});