const removeFromArray = function(arr, ...args) {
    for (var i = arr.length; i--;) {
        arr.forEach(element => {
            if (arr[i] === args) arr.splice(i, 1);
        });
       
      }
      return arr;
   };

// Do not edit below this line
module.exports = removeFromArray;
