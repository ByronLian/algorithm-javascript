// https://leetcode.com/problems/longest-palindrome/
// Runtime: 76 ms, faster than 89.73% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 38 MB, less than 56.40% of JavaScript online submissions for Longest Palindrome.

/*
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  let odds = [];
  let count = 0;
  let countOdd = 0;

  for (let item in map) {
    if (map[item] % 2 === 0) {
      count += map[item];
    } else {
      odds.push(map[item]);
      countOdd++;
    }
  }

  const oddsVal = countOdd > 0 ? odds.reduce((acc, val) => acc + val) : 0;
  const total = oddsVal === 0 ? count : count + oddsVal - countOdd + 1;

  return total;
};
