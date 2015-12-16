app = angular.module('cv', ['ngRoute', 'ui.bootstrap', 'pascalprecht.translate']);

app.config(function($translateProvider) {
  $translateProvider
    .useStaticFilesLoader({prefix: 'i18n/', suffix: '.json'})
    .registerAvailableLanguageKeys(['en', 'zh'], {
      'en_*': 'en',
      'zh_*': 'zh'
    })
    .determinePreferredLanguage()
    .fallbackLanguage('en');
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'cv.html',
      name: 'About me'
    })
    .when('/projects', {
      templateUrl: 'projects.html',
      name: 'Projects'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('NavCtrl', function($scope, $route, $location, $translate) {

  $scope.pages = [];
  angular.forEach($route.routes, function(route, path) {
    if(route.name != null) {
      $scope.pages.push(angular.extend({
        active: function() {
          return path == $location.path();
        }
      }, route))
    }
  });

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