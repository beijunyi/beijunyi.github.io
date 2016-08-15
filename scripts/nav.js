app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/cv.html',
      name: 'Resume',
      icon: 'pie-chart'
    })
    .when('/projects', {
      templateUrl: 'partials/change-logs.html',
      name: 'Change logs',
      icon: 'list-alt'
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