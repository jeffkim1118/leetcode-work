/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
     const set1 = new Set(nums1);
     const set2 = new Set(nums2);
    const set3 = new Set();
     for (let val of set1) {
         if (set2.has(val)) {
             set3.add(val);
         }
     }
 return Array.from(set3);
};