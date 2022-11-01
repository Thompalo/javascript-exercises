const sumAll = function(num1, num2) {
    let finalValue = 0;
    let array = [];
    if (num1 > num2) {
        let temp = num2;
        num2 = num1;
        num1 = temp; 
    } else if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) || typeof num1 === "string" || typeof num2 === "string") {
        return "ERROR";
    }
    
    for (let i = num1; i <= num2; i++) {
                array.push(i);
        }
        finalValue = array.reduce((
            previousValue, currentValue) => previousValue + currentValue);
    
        return finalValue;
    };

// Do not edit below this line
module.exports = sumAll;


 /*   if ((num1 < 0 || num2 < 0) || (num1 == NaN || num2 == NaN)) {
        return "ERROR";
    }
     else if (num1 < num2) {
        let temp = num2;
        num2 = num1;
        num1 = temp; 
    }
    */