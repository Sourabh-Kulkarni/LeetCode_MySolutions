/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let newArr = [first];
    for(let i=0;i<encoded.length;++i){
       newArr.push(encoded[i] ^ newArr[i])
    }
    return newArr;
};
