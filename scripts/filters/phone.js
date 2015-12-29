app.filter('phone', function() {

  var regex = /^(?:(?:00|\+)?44)?\s*\(?0?\)?\s*(\d{10})$/g;

  function reset() {
    regex.lastIndex = 0;
  }

  return function(number) {
    var groups = regex.exec(number);
    reset();
    if(groups != null)
      return '+44 (0)' + groups[1];
    return number;
  }

});