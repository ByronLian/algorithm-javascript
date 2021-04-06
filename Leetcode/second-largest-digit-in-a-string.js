// https://leetcode.com/problems/second-largest-digit-in-a-string/
// Runtime: 88 ms, faster than 82.46% of JavaScript online submissions for Second Largest Digit in a String.
// Memory Usage: 39.7 MB, less than 80.70% of JavaScript online submissions for Second Largest Digit in a String.

/*
 * @param {string} s
 * @return {number}
 */

var secondHighest = function (s) {
  const map = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  let biggest = -1;
  let second = -1;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (map.has(letter)) {
      const num = parseInt(letter);
  
      if (num > biggest) {
        second = biggest;
        biggest = num;
      } else {
        if (num !== biggest && num > second) second = num;
      }
    }
  }

  return second === biggest ? -1 : second;
};
