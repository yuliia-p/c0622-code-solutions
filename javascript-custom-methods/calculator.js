/* exported calculator */
var calculator = {
  add(x, y) {
    var sum = x + y;
    return sum;
  },
  subtract(x, y) {
    var subtr = x - y;
    return subtr;
  },
  multiply(x, y) {
    var mult = x * y;
    return mult;
  },
  divide(x, y) {
    var dev = x / y;
    return dev;
  },
  square(x) {
    var sq = x * x;
    return sq;
  },
  sumAll(numbers) {
    var sumAll = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumAll += numbers[i];
    }
    return sumAll;
  },
  getAverage(numbers) {
    var sumAll = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumAll += numbers[i];
      var average = sumAll / numbers.length;
    }
    return average;
  }
};
