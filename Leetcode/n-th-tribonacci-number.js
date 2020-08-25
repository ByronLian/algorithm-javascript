// https://leetcode.com/problems/n-th-tribonacci-number/
// Solution from: https://leetcode.com/problems/n-th-tribonacci-number/discuss/345909/O(n)-time-and-memory-javascript-solution-56-ms

/*
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let calc = new Array(n);
  calc[0] = 0;
  calc[1] = 1;
  calc[2] = 1;

  for (let i = 3; i <= n; i++) {
    calc[i] = calc[i - 1] + calc[i - 2] + calc[i - 3];
  }

  return calc[n];
};
