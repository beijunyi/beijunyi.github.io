app.filter('decode', function() {
  return function(base64) {
    try {
      return atob(base64);
    } catch(e) {
      return base64;
    }
  }
});