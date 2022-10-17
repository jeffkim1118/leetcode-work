/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let water = 0,
      i = 0,
      j = height.length - 1;
      while (i < j) {
        water = Math.max(water, Math.min(height[i], height[j]) * (j - i));
        height[i] <= height[j] ? i ++ : j --;
      }  
     return water
    
    
    
    
//     let largestArea = 0;
//     let water = 0;
//     let largestHeight = 0;
//     let i = 0;
//     let j = height.length - 1;
    
    
//     while(i < j){
    //     if(height[i] < height[j]){
    //         largestHeight = height[i];
    //         water = largestHeight * (j - i)
    //         if(water > largestArea){
    //             largestArea = water;
    //         }
    //          i++;
    //     }
    // }
    // return largestArea;
    
    
//     let z = 0;
//     let distance = height.length;
//     let maxHeight=0;
//     let largestArea=0;
    
//     for(let front = 0; front < height.length; front++){
//         for(let back = height.length - 1; back >= 0; back--){
//             if(height[front] > height[back]){
//                 maxHeight = height[back];
//                 if(largestArea < maxHeight * distance){
//                     largestArea = maxHeight * distance;
                    
//                 }
//             }else if(height[front] < height[back]){
//                 maxHeight = height[front];
//                 if(largestArea < maxHeight * distance){
//                     largestArea = maxHeight * distance;
//                 }
//             }else{
//                 maxHeight = height[front];
//                 if(largestArea < maxHeight * distance){
//                     largestArea = maxHeight * distance;
//                 }
//             }
//         }
//     }
//     return largestArea;
};