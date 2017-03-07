var o1 = {
  asw: 42,
  ask: function() {
    return this.asw;
  }
};

var o2 = {
  fo: {
    asw: 92
  },
};

o2.fo.ask = o1.ask;

console.log(o1.ask());
console.log(o2.fo.ask());
