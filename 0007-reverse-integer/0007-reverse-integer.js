/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // if(x < 0){
    //     return parseInt("-" + x.toString().split('').reverse().join(''));
    // }
    // return parseInt(x.toString().split('').reverse().join(''));
    
    
    
    let current = 0, negative = false;
    if(x < 0) negative = true;
    
    // Make the number positive 
    x = Math.abs(x)
    
    while( x > 0) {
        current = current * 10 + x % 10;
        x = Math.floor(x / 10)
    }
    
    // Make sure the size is 32 bit 
    if(current > Math.pow(2, 31) - 1 || current < Math.pow(-2, 31)) return 0;
    
    return negative ? current * -1 : current;
    
    
};