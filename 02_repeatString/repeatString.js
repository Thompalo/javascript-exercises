const repeatString = function(string, num) {
    let buildString = "";
    for (let i = 0; i < num; i++) {
        
        buildString = buildString.concat(string);
        
}
return buildString;
};


// Do not edit below this line
module.exports = repeatString;