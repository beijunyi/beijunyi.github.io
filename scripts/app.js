app = angular.module('cv', ['ngRoute', 'ui.bootstrap']);

app.controller('AppCtrl', function($scope, PrinterService) {

  PrinterService.registerHook(function(state) {
    $scope.printerView = state;
  });

});