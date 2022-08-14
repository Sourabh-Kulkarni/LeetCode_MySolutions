/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let newArr = [];
    for(let i=0;i<nums.length;++i){
            newArr.splice(index[i],0,nums[i]);
    }
    return newArr;
};
