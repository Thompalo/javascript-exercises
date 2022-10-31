const ftoc = function(num) {
let celsius = 5 / 9 * (num - 32);
celsius = Math.round(celsius * 10) / 10;
return celsius;
};

const ctof = function(num) {
let fahr = 32 + (num * 1.8);
fahr = Math.round(fahr * 10) / 10;
return fahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
