/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let res = nums[0] + nums[1] + nums[2];
    
    for(let i=0; i < nums.length-2; i++){
        let a = nums[i];
        let l = i+1;
        let r = nums.length-1;
        while(l < r){
            let sum = a + nums[l] + nums[r];
            res = Math.abs(target-sum) < Math.abs(target - res)? sum: res;
            
            if(sum > target) r--;
            else if(sum < target) l++;
            else return target;
        }
    }
    return res;
};