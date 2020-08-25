// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

/*
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  // Brute
  // let count = 0;
  // for (let i = low; i <= high; i++) {
  //   if (i % 2 !== 0) count++;
  // }
  // return count;
 
  // Easy math
  if (low === high) return low % 2 === 0 ? 0 : 1;
  if (low % 2 === 0 && high % 2 === 0) return (high - low + 1) / 2 - 1;
  if (low % 2 !== 0 && high % 2 !== 0) return (high - low + 1) / 2;
  if (low % 2 !== 0 && high % 2 === 0) return (high - low + 1) / 2;
  if (low % 2 === 0 && high % 2 !== 0) return (high - low + 1) / 2;
};
