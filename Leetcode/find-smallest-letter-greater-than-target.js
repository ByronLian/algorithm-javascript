// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
// Runtime: 72 ms, faster than 96.03% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
// Memory Usage: 39.2 MB, less than 7.94% of JavaScript online submissions for Find Smallest Letter Greater Than Target.

/*
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function (letters, target) {
  const temp = letters.map(x => x.charCodeAt(0)).sort((a, b) => a - b);
  const targetCode = target.charCodeAt();

  // Case that target greater than any elements in letters
  if (targetCode >= temp[temp.length - 1]) {
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] !== targetCode) return String.fromCharCode(temp[i]);
    }
  }

  for (let j = 0; j < temp.length; j++) {
    if (temp[j] > targetCode) return String.fromCharCode(temp[j]);
  }
};