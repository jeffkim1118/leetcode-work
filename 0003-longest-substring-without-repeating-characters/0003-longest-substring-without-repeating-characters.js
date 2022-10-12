/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
//     let longest = "";
//     let max = 0
    
//     for(let i = 0; i < s.length; i++){
//         if(s[i] != -1){
//             longest = longest.slice(i + 1);
//         }
//         longest += i;
//         max = Math.max(max, longest.length);
//     }
//     return max;
        
    let mapString = "";
    let max = 0;
    for (const x of s) {
        const index = mapString.indexOf(x);
        if (index !== -1) {
            mapString = mapString.slice(index + 1);
        }
        mapString += x;
        max = Math.max(max, mapString.length);
    }
    return max;
};