const repeatString = function(string, num) {
    let buildString = "";
    if (num > 0){
    for (let i = 0; i < num; i++) {
            buildString = buildString.concat(string);
        }
            return buildString;
        } else if (num == 0){
            return "";
        } else {
            return "ERROR";
        }
}


// Do not edit below this line
module.exports = repeatString;