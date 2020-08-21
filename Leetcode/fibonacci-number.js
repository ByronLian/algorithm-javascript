// https://leetcode.com/problems/fibonacci-number/
// Runtime: 68 ms, faster than 89.04% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 36.8 MB, less than 10.73% of JavaScript online submissions for Fibonacci Number.

/*
 * @param {number} N
 * @return {number}
 */

// var fib = function(N) {
//   if(N < 2) return N;

//   return fib(N-1) + fib(N-2);
// };

// DP
var fib = function (N) {
  if (N < 2) return N;

  let map = {};
  let count = 2;
  map[0] = 0;
  map[1] = 1;

  while (count < N) {
    map[count] = map[count - 1] + map[count - 2];
    count++;
  }

  return map[N - 1] + map[N - 2];
};
