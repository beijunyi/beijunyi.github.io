app.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('projects', {
      url: '/',
      templateUrl: 'projects/view.html',
      controller: function($scope, $http) {
        $http.get('projects/projects.json').success(function(projects) {
          $scope.projects = projects;
        });
      }
    });
});