const sumAll = function(num1, num2) {
    let finalValue = 0;
    let array = [];
        for (let i = num1; i <= num2; i++) {
                array.push(i);
        }
        finalValue = array.reduce((
            previousValue, currentValue) => previousValue + currentValue);
    
        return finalValue;
    };

// Do not edit below this line
module.exports = sumAll;
