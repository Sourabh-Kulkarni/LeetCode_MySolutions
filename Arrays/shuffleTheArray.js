/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let shuffleArr = [];
    for(let i=0,j=0;i<n;++i,j=j+2){
        shuffleArr[j] = nums[i];
        shuffleArr[j+1] = nums[n + i];
    }
    return shuffleArr;
};
