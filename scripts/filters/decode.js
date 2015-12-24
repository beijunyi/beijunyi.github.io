app.filter('decode', function() {

  function hashCode(s) {return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);}

  return function(base64, hash) {
    var b = atob(base64);
    if(hashCode(b) != hash)
      b += " (checksum error)";
    return b;
  }
});