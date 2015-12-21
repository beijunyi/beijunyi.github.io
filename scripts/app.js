app = angular.module('cv', ['ngRoute', 'ui.bootstrap', 'pascalprecht.translate']);

app.controller('AppCtrl', function($scope, PrinterService) {

  PrinterService.registerHook(function(state) {
    $scope.printerView = state;
  });

});

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