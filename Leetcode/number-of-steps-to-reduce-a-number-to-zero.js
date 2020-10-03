// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
/*
 * @param {number} num
 * @return {number}
 */

 /*
  recursive


  var numberOfSteps  = function(num) {
    if(num == 0) return 0;
    return 1 + (num % 2 === 0 ? numberOfSteps(num / 2) : numberOfSteps(num - 1));
  }
 */

var numberOfSteps  = function(num) {
  if(num == 0) return 0;

  let count = 1;

  while(num > 1){
    num = num % 2 === 0 ? num / 2 : num -1;
    count++;
  }

  return count;
};