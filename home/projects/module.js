addModule('projects', function($scope, $http) {
  $http.get('projects/updates.json').success(function(updates) {
    $scope.updates = updates;
  });
  $http.get('projects/projects.json').success(function(projects) {
    $scope.projects = projects;
  });
}, true);