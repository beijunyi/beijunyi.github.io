app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/cv.html',
      name: 'About me',
      icon: 'person-running'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      name: 'Projects',
      icon: 'claw-hammer'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('NavCtrl', function($scope, $route, $location, PrinterService) {

  $scope.pages = [];
  $scope.print = print;
  angular.forEach($route.routes, function(route, path) {
    if(route.name != null) {
      $scope.pages.push(angular.extend({
        isActive: function() {
          return path == $location.path();
        },
        activate: function() {
          $location.path(path);
        }
      }, route))
    }
  });

  function print() {
    PrinterService.print();
  }
  
});