// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// Runtime: 76 ms, faster than 67.35% of JavaScript online submissions for Reverse Words in a String III.
// Memory Usage: 43.5 MB, less than 8.70% of JavaScript online submissions for Reverse Words in a String III.

/*
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  let arr = s.split(' ');

  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i].split``;
    arr[i] = '';
    for (let j = subArr.length - 1; j >= 0; j--) {
      arr[i] += subArr[j];
    }
  }

  return arr.join(' ');
};