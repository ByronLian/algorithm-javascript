// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
// Runtime: 64 ms, faster than 94.03% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
// Memory Usage: 36.9 MB, less than 5.35% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.

/*
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function (n) {

  const str = n.toString();

  let timesVal = 1;
  let addVal = 0;

  for (let i = 0; i < str.length; i++) {
    timesVal *= parseInt(str[i]);
    addVal += parseInt(str[i]);
  }


  return timesVal - addVal;
};
