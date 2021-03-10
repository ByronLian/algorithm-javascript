// https://leetcode.com/problems/determine-if-string-halves-are-alike/
// Runtime: 76 ms, faster than 94.47% of JavaScript online submissions for Determine if String Halves Are Alike.
// Memory Usage: 38.6 MB, less than 97.63% of JavaScript online submissions for Determine if String Halves Are Alike.

/*
 * @param {string} s
 * @return {boolean}
 */

var halvesAreAlike = function (s) {
  const len = s.length;
  return (
    countVowelNum(s.substring(0, len / 2)) ===
    countVowelNum(s.substring(len / 2, len))
  );
};

const countVowelNum = (word) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let counter = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) counter += 1;
  }

  return counter;
};
