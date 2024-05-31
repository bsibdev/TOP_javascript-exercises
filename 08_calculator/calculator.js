const add = function(num1,num2) {
	let sum = num1 + num2;
  return sum;
};

const subtract = function(num1,num2) {
    let difference = num1 - num2;
    return difference;
  };

const sum = function(toAdd) {
	return toAdd.reduce((total, current) => total + current,0);
};

const multiply = function(toProduct) {
  return toProduct.reduce((total, current) => total * current);

};

const power = function(num,pow) {
	return Math.pow(num,pow);
};

const factorial = function(num) {
  if (num ===0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *=i;
  }
  return product;
	
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
