const palindromes = function (string) {
let forW = string.toLowerCase().replace(/[^a-z]+/g, "");
let backW = forW.split("").reverse().join();
forW = forW.split("").join();
if (forW === backW) { 
    return true;
} else {
    return false;
}

//console.log(forW);
//console.log(backW);
};

//palindromes("test!");



// Do not edit below this line
module.exports = palindromes;

/* if (forW == backW) { 
    return true;
} else {
    return false;
}
 */