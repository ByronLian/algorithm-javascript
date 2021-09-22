// https://leetcode.com/problems/baseball-game/
// Runtime: 88 ms, faster than 31.55% of JavaScript online submissions for Baseball Game.
// Memory Usage: 37.5 MB, less than 44.66% of JavaScript online submissions for Baseball Game.

/*
 * @param {string[]} ops
 * @return {number}
 */

var calPoints = function (ops) {
  let s = [];

  for (op of ops) {
    let n = s.length;
    switch (op) {
      case '+':
        s.push(s[n - 2] + s[n - 1]);
        break;
      case 'D':
        s.push(2 * s[n - 1]);
        break;
      case 'C':
        s.pop();
        break;
      default:
        s.push(+op);

    }
  }

  return s.reduce((acc, val) => acc + val);
};