app = angular.module('cv', ['ngRoute', 'ui.bootstrap']);

app.controller('AppCtrl', function($scope, PrinterService) {
  
  $scope.print = print;

  PrinterService.registerHook(function(state) {
    $scope.printerView = state;
  });
  
  function print() {
    PrinterService.print(true);
  }

});