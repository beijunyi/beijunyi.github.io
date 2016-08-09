app = angular.module('cv', ['ngRoute', 'ui.bootstrap']);

app.controller('AppCtrl', function($scope, PrinterService) {
  
  $scope.print = print;
  
  function print() {
    PrinterService.print();
  }

});