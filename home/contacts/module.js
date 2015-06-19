app.config(function($stateProvider) {
  $stateProvider
    .state('contacts', {
      url: '/contacts',
      templateUrl: 'contacts/view.html'
    });
});