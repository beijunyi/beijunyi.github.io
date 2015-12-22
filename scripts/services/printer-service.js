app.service('PrinterService', function($location) {

  var hooks = [];

  function isPrinterView() {
    return $location.search()['printer'] == 'yes';
  }

  return {
    registerHook: function(fn) {
      fn(isPrinterView());
      hooks.push(fn);
    },


    isPrinterView: function() {
      return isPrinterView();
    },

    setPrinterView: function(state) {
      angular.forEach(hooks, function(fn) {
        fn(state);
      });
      $location.search('printer', state ? 'yes' : null);
    }
  }
});