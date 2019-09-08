// https://leetcode.com/problems/length-of-last-word/
// Runtime: 44 ms, faster than 98.14% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 33.8 MB, less than 80.77% of JavaScript online submissions for Length of Last Word.

/*
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  // case s = ''
  if (s.length === 0) return 0;
  // case s = 'a' or s = ' '
  if (s.length === 1) return s[0] === ' ' ? 0 : 1;

  // turn s into array
  // e.g s = 'test array'
  // arr = ['test', '', 'array']
  const arr = s.split(' ');

  // check array from last element
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== '')
      return arr[i].length;
  }

  return 0;
};