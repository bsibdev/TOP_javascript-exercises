const removeFromArray = function(original, ...toRemove) {
    //return original.filter(original => (original !== remove));
    let length = toRemove.length;

    for (i = -1; i < toRemove.length; i++) {
    toRemove.forEach((toRemove) => {
        const index = original.indexOf(toRemove);
        if (index > -1)
            original.splice(index,1);
    });
    
    }
    return original;
};

// Do not edit below this line
module.exports = removeFromArray;
