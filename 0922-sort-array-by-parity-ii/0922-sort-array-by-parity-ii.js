/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = [];
    let odd = [];
    let final = [];
    
    for(let num of nums){
      if(num%2===0){
        even.push(num);
      }else{
        odd.push(num);
      }
    }
    console.log(even, 'even');
    console.log(odd, "odd")

    for(let i = 0; i < nums.length; i++){
      if(i%2===0){
        let val = even.pop();
        final.push(val);
      }else{
        let val = odd.pop();
        final.push(val);
      }
    }
    return(final);
};