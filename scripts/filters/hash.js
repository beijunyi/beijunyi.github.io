app.filter('hash', function() {

  function hashCode(s) {return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);}

  return function(value, hash, msg) {
    if(hashCode(value) != hash) {
      if(msg != null)
        return value += " " + msg;
      return false;
    }
    return value;
  }
});