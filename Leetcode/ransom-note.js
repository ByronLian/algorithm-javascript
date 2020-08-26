// https://leetcode.com/problems/ransom-note/
// Runtime: 96 ms, faster than 79.12% of JavaScript online submissions for Ransom Note.
// Memory Usage: 39.5 MB, less than 59.08% of JavaScript online submissions for Ransom Note.

/*
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote === "") return true;

  for (let i = 0; i < magazine.length; i++) {
    ransomNote = ransomNote.replace(magazine[i], "");
    if (ransomNote.length === 0) return true;
  }

  return false;
};
