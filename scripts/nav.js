app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/cv.html',
      name: 'About me'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      name: 'Projects'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('NavCtrl', function($scope, $route, $location, $translate, PrinterService) {

  $scope.pages = [];
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

  $scope.togglePrinterVersion = function() {
    var state = !PrinterService.isPrinterView();
    PrinterService.setPrinterView(state);
  };

  $scope.hoverNavZone = false;
  $scope.enterNavZone = function() {
    $scope.hoverNavZone = true;
  };
  $scope.leaveNavZone = function() {
    $scope.hoverNavZone = false;
  };

  $scope.languages = {
    en: 'English',
    zh: 'Chinese'
  };
  $scope.selectedLanguage = $translate.use();
  $scope.selectLanguage = function(langKey) {
    $scope.selectedLanguage = langKey;
    $translate.use($scope.selectedLanguage);
  }

});