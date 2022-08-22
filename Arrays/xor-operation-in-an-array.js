/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let nums = [], output = 0;
    for(let i=0;i<n;++i){
        nums[i] = start + (2 * i);
        output = output ^ nums[i];
    }
    return output; 
};
