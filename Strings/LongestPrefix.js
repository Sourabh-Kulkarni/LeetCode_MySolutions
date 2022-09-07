Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

-------------------------------------------------------------------------------------------------------------------------
  /*CODE: */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let mainOutput = [];
    let alternateOutput = [];
    for(let word=0;word<strs[0].length; ++word){
        if(mainOutput === ""){
            let i=1,count=0;
        while(i<strs.length){
            if(strs[i].indexOf(strs[0][word]) === strs[0].indexOf(strs[i][word])){
                count++;
            }
            i++;
        }
        if(count === (strs.length - 1)){
            mainOutput=[];
            mainOutput.push(strs[0][word]);
        }else{mainOutput = ""}
      } // end of mainOutput === "" loop
        
        
        else{
            let i=1,count=0;
        while(i<strs.length){
            // let indValue = strs[i].indexOf(word);
            // let indValue = 
            if(strs[0][word] === strs[i][word]){
                count++;
            }
            i++;
        }
            if(count === (strs.length - 1)){
              mainOutput.push(strs[0][word]);
            }else{
                return mainOutput.join('').toString();
                // alternateOutput = mainOutput;
                // mainOutput = ""; 
            }              
      } // end of mainOutput 1== "" loop
        
    }
    if(alternateOutput && mainOutput === ''){

        return alternateOutput.join('').toString();
    }
    else if(alternateOutput.length === mainOutput.length){
        return alternateOutput.join('').toString();
    }
    else{
        return mainOutput.join('').toString()
    }
};
