/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   // let d = digits.join('');
   //  let increment = parseInt(d) + 1
   //  let numberDigits = increment.toString().split('');
   //  let realDigits = numberDigits.map(Number);
   //  return realDigits;
    
    if(digits[digits.length-1] < 9){ 
         digits[digits.length-1]++;
    }
    else{
        for(let i=digits.length-1; i>=0; i--){
            if(++digits[i] > 9) digits[i] = 0;
            else return digits;
        } 
    digits.unshift(1);
    }

    return digits;
};