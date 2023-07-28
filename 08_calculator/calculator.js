const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(item => sum += item);
  return sum;
};

const multiply = function(...args) {
  let result = 1;
  args.forEach(item => result*= item);
  return result;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  if (a === 0) return
	let fact = 1;
  for (let i = a; a > 0; i--) {
    fact *= i;
  }
  return fact;
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
