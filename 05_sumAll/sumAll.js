const sumAll = function(inta,intb) {
 
let startValue;
let endValue;


// conditional to assign start and end to correct ints
  if (inta <= intb && typeof inta == "number" && typeof intb =="number" && inta + intb >=0) {
    startValue = inta;
    endValue = intb;
    } else if (inta > intb && typeof inta == "number" && typeof intb =="number" && inta + intb >=0) {
        startValue = intb;
        endValue = inta;
    } else {
      return "ERROR"
    }

//create & fill array with values to add

const range = [];  
for (let i = startValue; i < endValue; i++) {
  range.push(i);
}

//add values of array elements together
let sum = endValue;
for (let i = 0; i < range.length; i++) {
  sum += range[i];
}
let finalSum = sum;
return finalSum;
};


//
  /*test('sums numbers within the range', () => {
    expect(sumAll(1, 4)).toEqual(10);
  });
  test('works with large numbers', () => {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  test.skip('works with larger number first', () => {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  test.skip('returns ERROR with negative numbers', () => {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
  test.skip('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
  test.skip('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');*/

// Do not edit below this line
module.exports = sumAll;
