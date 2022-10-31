const removeFromArray = function(arr, ...args) {
    let forDeletion = args;

    arr = arr.filter(eachItemInArr => !forDeletion.includes(eachItemInArr));

    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
