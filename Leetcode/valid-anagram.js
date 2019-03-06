// https://leetcode.com/problems/valid-anagram/
// Runtime: 104 ms, faster than 42.31% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 37.6 MB, less than 49.62% of JavaScript online submissions for Valid Anagram.
/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

  // Solution
  // split string to array and sort it
  // then compare element each by each

  const newS = s.split('').sort();
  const newT = t.split('').sort();
  const newSlen = newS.length;
  const newTlen = newT.length;

  if (newSlen !== newTlen) return false;

  for (let i = 0; i < newSlen; i++) {
    if (newS[i] !== newT[i]) return false;
  }

  return true;
}; 