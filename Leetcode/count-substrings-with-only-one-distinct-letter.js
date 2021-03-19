// https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/

/*
 * @param {string} S
 * @return {number}
 */

var countLetters = function (S) {
  let total = 0;
  let current = "";
  let counter = 1;

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== current) {
      current = S[i];
      counter = 1;
    } else {
      counter += 1;
    }

    total += counter;
  }

  return total;
};
