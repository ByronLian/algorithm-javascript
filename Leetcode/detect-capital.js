// https://leetcode.com/problems/detect-capital/
// Runtime: 80 ms, faster than 96.55% of JavaScript online submissions for Detect Capital.
// Memory Usage: 15.2 MB, less than 60.56% of JavaScript online submissions for Detect Capital.

/*
 * @param {string} word
 * @return {boolean}
 */

var detectCapitalUse = function (word) {
  // Case "s" or "S"
  const len = word.length;
  if (len === 1) return true;

  const firstEl = word[0].charCodeAt(0);
  const secEl = word[1].charCodeAt(0);

  if (firstEl > 64 && firstEl < 91) {
    // Case "USA"
    if (secEl > 64 && secEl < 91) {
      for (let i = 2; i < len; i++) {
        let el = word[i].charCodeAt(0);
        if (el < 65 || el > 90) {
          return false;
        }
      }

      return true;
    // Case "Dog"
    } else {
      for (let i = 2; i < len; i++) {
        let el = word[i].charCodeAt(0);
        if (el > 64 && el < 91) {
          return false;
        }
      }

      return true;
    }

  }

  // Case "dog"
  if (firstEl < 65 || firstEl > 90) {
    for (let i = 1; i < len; i++) {
      let el = word[i].charCodeAt(0);
      if (el > 64 && el < 91) {
        return false;
      }
    }

    return true;
  }
}