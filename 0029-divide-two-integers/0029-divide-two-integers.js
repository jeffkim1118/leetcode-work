/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
     return Math.min(Math.max(dividend / divisor, Math.pow(-2,31)), Math.pow(2,31) - 1) | 0;
}