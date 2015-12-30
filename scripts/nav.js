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

app.controller('NavCtrl', function($scope, $route, $location) {

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

  //$scope.navZone = PrinterService.isPrinterView();
  //$scope.hoverNavZone = false;
  $scope.togglePrinterVersion = function() {
    //$scope.navZone = false;
    //$scope.hoverNavZone = false;
    //var state = !PrinterService.isPrinterView();
    //PrinterService.setPrinterView(state);
    var pdf = new jsPDF('p','pt','a4');
    pdf.addHTML(document.querySelector('#cv-main'), function() {
      pdf.save('download.pdf');
    });
  };
  //$scope.enableNavZone = function() {
  //  $scope.navZone = true;
  //};
  //$scope.enterNavZone = function() {
  //  if($scope.navZone)
  //    $scope.hoverNavZone = true;
  //};
  //$scope.leaveNavZone = function() {
  //  if($scope.navZone)
  //    $scope.hoverNavZone = false;
  //};

});