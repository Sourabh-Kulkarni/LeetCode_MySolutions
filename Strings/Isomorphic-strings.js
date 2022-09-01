/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let s1 = s.split("");
    let t1 = t.split("");
    let newarr = [];
    let output = true;
    for(let i=0;i< s1.length;++i){
        let check1 = s1.findIndex((element)=> s1[i] === element);
        let check2 = t1.findIndex((element)=> t1[i] === element);
        if(t1[check1] !== t1[i]){
            output = false;
        }   
        if(s1[check2] !== s1[i]){
            output = false;
        }
    }
    return output;
};
