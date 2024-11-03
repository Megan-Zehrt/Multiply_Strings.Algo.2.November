// 43. Multiply Strings



// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.








/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
    let str = (BigInt(num1) * BigInt(num2)).toString();let n1 = Number(num1)

    return str
};