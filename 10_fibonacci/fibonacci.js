const fibonacci = function(num_place) {
    let pos_num;
    if(typeof num_place !== 'number') {
        pos_num = parseInt(num_place);
    } else {
        pos_num = num_place;
    }

    if (pos_num < 0) return "OOPS";
    if (pos_num == 0) return 0;


    let num_1 = 0;
    let num_2 = 1;

    for (let i = 2; i <= pos_num; i++) {
        let current = num_1 + num_2;
        num_1 = num_2;
        num_2 = current;
        
    }
    return num_2; 

};

// Do not edit below this line
module.exports = fibonacci;

/*test('4th fibonacci number is 3', () => {
    expect(fibonacci(4)).toBe(3);
  });
  test.skip('6th fibonacci number is 8', () => {
    expect(fibonacci(6)).toBe(8);
  });
  test.skip('10th fibonacci number is 55', () => {
    expect(fibonacci(10)).toBe(55);
  });
  test.skip('15th fibonacci number is 610', () => {
    expect(fibonacci(15)).toBe(610);
  });
  test.skip('25th fibonacci number is 75025', () => {
    expect(fibonacci(25)).toBe(75025);
  });
  test.skip('0th fibonacci number is 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  test.skip('doesn\'t accept negatives', () => {
    expect(fibonacci(-25)).toBe("OOPS");
  });
  test.skip('DOES accept strings', () => {
    expect(fibonacci("0")).toBe(0);
  });
  test.skip('DOES accept strings', () => {
    expect(fibonacci("1")).toBe(1);
  });
  test.skip('DOES accept strings', () => {
    expect(fibonacci("2")).toBe(1);
  });
  test.skip('DOES accept strings', () => {
    expect(fibonacci("8")).toBe(21);
  });*/