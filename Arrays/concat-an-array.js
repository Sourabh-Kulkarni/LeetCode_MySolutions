/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let newNums = nums;
        newNums.push(...nums)  
    // let newNums = nums.concat(nums);
    return newNums;
};
