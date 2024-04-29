
const reverseString = function(string) {
    const splitString = string.split("");
    let reversed = splitString.reverse();
    let reversedString = reversed.join("");
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
