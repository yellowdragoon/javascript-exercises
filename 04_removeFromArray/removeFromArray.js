const removeFromArray = function(array, ...removals) {
    removals.forEach(element => {
        let index = array.indexOf(element);
        if (index > -1) { // only splice array when item is found
            array.splice(index, 1); // 2nd parameter means remove one item only
        }
    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
