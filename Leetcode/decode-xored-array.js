// https://leetcode.com/problems/decode-xored-array/
// Runtime: 104 ms, faster than 99.18% of JavaScript online submissions for Decode XORed Array.
// Memory Usage: 45.6 MB, less than 12.53% of JavaScript online submissions for Decode XORed Array.

/*
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */

var decode = function (encoded, first) {
  let result = [first];
  let key = first;

  for (let i = 0; i < encoded.length; i++) {
    result.push(encoded[i] ^ key);
    key = result[result.length - 1];
  }

  return result;
};
