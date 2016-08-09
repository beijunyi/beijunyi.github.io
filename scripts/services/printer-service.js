app.service('PrinterService', function($location, $window) {

  return {
    print: function() {
      $window.print();
    }
  }

});