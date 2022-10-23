/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    
    let prev = 1, acc = 2, temp;
    
    for (let i = 3; i <= n; i++) {
        temp = prev + acc;
        prev = acc;
        acc = temp;
    } 
    
    return acc;
};