var x = {
  n: 99
};

var y = {
  n: 1001
}

function mult(m) {
  return this.n * m;
}

console.log(mult.call(x, 20));

console.log(mult.apply(y, [10]));


console.log(mult(32));

var n = 800;
console.log(mult(32));

var n = 80;
console.log(mult(32));


Function.prototype.bind = function(obj) {
  var method = this;
  var f = function() {
    return method.apply(obj, arguments);
  }
  return f;
};

console.log(mult.bind(y)(99));
