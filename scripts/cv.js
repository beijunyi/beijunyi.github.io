app.controller('CvCtrl', function($scope, $filter, $route, $location, $uibModal) {
  var params = $location.search();
  $scope.phone = params.phone;

  $scope.secretHash = 885602322;
  $scope.revealSecret = function(retry) {
    $uibModal.open({
      templateUrl: 'partials/reveal-secret.html',
      controller: function ($scope, $uibModalInstance) {
        $scope.retry = !!retry;
        $scope.number = '';
        $scope.ok = function() {
          $uibModalInstance.close($scope.number);
        };
        $scope.cancel = function() {
          $uibModalInstance.dismiss();
        };
      }, size: 'sm'
    }).result.then(function(number) {
      if($filter('hash')($filter('phone')(number), $scope.secretHash))
        $location.search('phone', btoa(number).replace(/=+$/, ''));
      else
        $scope.revealSecret(true);
    });
  }
});