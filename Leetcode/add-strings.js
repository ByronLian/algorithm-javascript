// https://leetcode.com/problems/add-strings/
// Solution from: https://leetcode.com/problems/add-strings/discuss/436854/Javascript-Faster-than-97

/*
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings = function (num1, num2) {
  let largest = num1.length >= num2.length ? num1 : num2;
  let shortest = num1.length < num2.length ? num1 : num2;

  shortest =
    largest.length - shortest.length === 0
      ? shortest
      : "0".repeat(largest.length - shortest.length) + shortest;

  let sum = "";
  let carry = 0;

  for (let i = largest.length - 1; i >= 0; i--) {
    let charShortest = shortest.length > i ? parseInt(shortest[i]) : 0;
    const currentLarge = parseInt(largest[i]) + carry;
    const indexSum = charShortest + currentLarge;
  
    if (indexSum >= 10) {
      sum = (indexSum - 10).toString() + sum;
      carry = 1;
    } else {
      sum = indexSum.toString() + sum;
      carry = 0;
    }
  }
  sum = carry > 0 ? carry.toString() + sum : sum;
  return sum;
};
