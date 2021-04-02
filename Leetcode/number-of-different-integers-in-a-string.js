// https://leetcode.com/problems/number-of-different-integers-in-a-string/
// Runtime: 72 ms, faster than 97.49% of JavaScript online submissions for Number of Different Integers in a String.
// Memory Usage: 39.2 MB, less than 61.51% of JavaScript online submissions for Number of Different Integers in a String.

/*
 * @param {string} word
 * @return {number}
 */

var numDifferentIntegers = function (word) {
  const store = new Set();
  let str = "";

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const letterCharCode = letter.charCodeAt(0);
  
    if (letterCharCode >= 48 && letterCharCode <= 57) {
      str += letter;
    } else {
      if (str !== "") store.add(parseInt(str));
      str = "";
    }
  }

  if (str !== "") store.add(parseInt(str));

  return store.size;
};
