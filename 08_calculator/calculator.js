const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((acc, currentVal) => acc + currentVal
  , 0);
};

const multiply = function(...args) {
  return args.reduce((acc, currentVal) => acc * currentVal
  , 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	if(num == 1 || num == 0) return 1;
  return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
