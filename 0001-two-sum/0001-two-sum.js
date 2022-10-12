/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums,target) {
   for(let i = 0; i < nums.length; i++){
        let n = nums[i]
        for(let j = i+1; j < nums.length; j++){   
            let n2 = nums[j]
            if(n+n2===target){
                return [i,j]
            }
        }
    }
};
