const removeFromArray = function(oldArray,...takeOut) {

    for (i = 0; i < takeOut.length; i++) {
        let eleIndex = oldArray.indexOf(takeOut[i])
        if (eleIndex > -1) {
            oldArray.splice(eleIndex, 1)
        }
    }
    return oldArray
//I need to take an array, then target and remove a specific element and then return the new array
};



// Do not edit below this line
module.exports = removeFromArray;
