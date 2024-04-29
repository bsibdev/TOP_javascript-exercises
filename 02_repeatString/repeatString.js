const repeatString = function(word,num) {
    const number = Math.floor(Math.random() * 1000);
    if (num < 0) {
        return "ERROR";
    }
    let string = '';
    for (let i = 0; i < num; i++) {
        string += word;
    }
    return string;
};


// Do not edit below this line
module.exports = repeatString;