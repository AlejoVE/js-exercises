/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertToUSD(price) {
  var price = (Number.parseFloat(price).toFixed(2) * 1.4);
  var percent =  price * 0.01;
  var result = price + percent;
  return result;
}
function convertToBRL(price) {
  var price =  (Number.parseFloat(price).toFixed(2) * 5.6);  
  var percent =  price * 0.01;
  var result = price + percent;
  return result;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);
