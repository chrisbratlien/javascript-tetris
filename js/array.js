///////////Array prototype versions //////////

//some ES-native aliases for Chris's Smalltalk-like Collection coding habits
Array.prototype.collect = Array.prototype.map;
Array.prototype.each = Array.prototype.forEach;
Array.prototype.select = Array.prototype.filter;

Array.prototype.reject = function(test) {
  return this.select(function(element) { return !test(element); });

}

//detect returns the first element which passes the test, or false. aka "find"
Array.prototype.detect = function (test) {
    for (var i = 0; i < this.length; i += 1) {
        if (test(this[i])) {
            return this[i];
        }
    }

    return false;
};

Array.prototype.contains = function (x) { //does the array contain x?
    var result = this.detect(function (n) { return n == x; });
    return (result !== false);
};

Array.prototype.inject = function (acc, fn) {
    var result = acc;
    this.each(function (e) {
        result = fn(result, e);
    });
    return result;
};

Array.prototype.atRandom = function () {
    if (this.length === 0) { return false; }
    var i = Math.floor(Math.random() * this.length);
    return this[i];
};

Array.prototype.shuffle = function(){
        var result = this.collect(function(x) { return x; });  //make a copy, do all state changing on the new copy.
        for(var j, x, i = result.length; i; j = parseInt(Math.random() * i), x = result[--i], result[i] = result[j], result[j] = x);
        return result;
};

Array.prototype.integrate = function (fn) {
    return this.inject(0, function (acc, i) { return acc + fn(i); });
};

Array.prototype.sum = function () {
    return this.integrate(function (x) { return x; });
};

 Array.prototype.average = function() {
  return this.integrate(function(x) {return x; }) / this.length;
};


Array.prototype.unique = function() {
  var n = {},r=[];
  for(var i = 0; i < this.length; i++) {
    if (!n[this[i]]) {
      n[this[i]] = true;
      r.push(this[i]);
    }
  }
  return r;
};

Array.prototype.intersect = function(b) {
  var result = this.filter(function(o){  return b.indexOf(o) != -1; });
  return result; 
};


