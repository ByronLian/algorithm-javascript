// https://leetcode.com/problems/build-an-array-with-stack-operations/
// Runtime: 72 ms, faster than 69.39% of JavaScript online submissions for Build an Array With Stack Operations.
// Memory Usage: 37 MB, less than 11.82% of JavaScript online submissions for Build an Array With Stack Operations.

/*
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

var buildArray = function(target, n) {
  let result = [];
  let currentVal = 0;
  
  for(let i=0; i<target.length; i++) {
     
      if(target[i] - currentVal > 1) {
          for(let j=0; j< target[i] - currentVal - 1; j++){
              result.push('Push', 'Pop');
          }
          
      }
      result.push('Push');
       
      currentVal = target[i];
  }
  
  return result;
};