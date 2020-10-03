// https://leetcode.com/problems/reverse-only-letters/
// Runtime: 76 ms, faster than 54.55% of JavaScript online submissions for Reverse Only Letters.

/*
 * @param {string} S
 * @return {string}
 */

var reverseOnlyLetters = function (S) {
  const len = S.length;
  let result = "";
  let temp = [];

  // Pick up all letters into temp array
  for (let i = 0; i < len; i++) {
    if (isLetter(S[i])) {
      temp.push(S[i]);
    }

  }

  // Put them back with un-letter char
  for (let j = 0; j < len; j++) {
    if (isLetter(S[j])) {
      result += temp.pop();
    } else {
      result += S[j];
    }
  }

  return result;
};

// This function is used to check if it's letter or not
const isLetter = (char) => {
  const ascVal = char.charCodeAt();

  if ((ascVal > 64 && ascVal < 91) || (ascVal > 96 && ascVal < 123)) {
    return true;
  } else {
    return false;
  }
}