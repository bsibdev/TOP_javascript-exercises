const removeFromArray = function(original, ...toRemove) {
    //return original.filter(original => (original !== remove));
    toRemove.forEach((toRemove) => {
        const index = original.indexOf(toRemove);
        if (index > -1)
            original.splice(index,1);
    });
    

    return original;
};

// Do not edit below this line
module.exports = removeFromArray;
