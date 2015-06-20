var app = angular.module('app', ['ui.router', 'ui.bootstrap'])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  });

function addModule(id, controller, isDefault) {
  app.config(function($stateProvider) {
    $stateProvider
      .state(id, {
        url: isDefault ? '/' : ('/' + id),
        templateUrl: id + '/view.html',
        controller: controller
      });
  });
}