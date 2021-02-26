// https://leetcode.com/problems/single-row-keyboard/
// Runtime: 76 ms, faster than 95.27% of JavaScript online submissions for Single-Row Keyboard.
// Memory Usage: 39.8 MB, less than 40.83% of JavaScript online submissions for Single-Row Keyboard.

/*
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

var calculateTime = function (keyboard, word) {
  let store = {};
  let time = 0;
  let start = 0;

  // build index map
  for (let i = 0; i < keyboard.length; i++) {
    store[keyboard[i]] = i;
  }

  for (let j = 0; j < word.length; j++) {
    time += Math.abs(store[word[j]] - start);
    start = store[word[j]];
  }

  return time;
};
