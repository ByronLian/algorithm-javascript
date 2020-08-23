// https://leetcode.com/problems/uncommon-words-from-two-sentences/
// Solution from: https://leetcode.com/abavish

/*
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */

var uncommonFromSentences = function (A, B) {
  let words = A.split(' ').concat(B.split(' '));
  let obj = {};
  let result = [];

  for (let word of words) {
    obj[word] = (obj[word] || 0) + 1;
  }

  for (let o in obj) {
    if (obj[o] == 1) result.push(o);
  }

  return result;
};