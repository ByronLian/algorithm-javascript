// https://leetcode.com/problems/maximum-number-of-balloons/
// Runtime: 72 ms, faster than 92.16% of JavaScript online submissions for Maximum Number of Balloons.
// Memory Usage: 37.6 MB, less than 52.29% of JavaScript online submissions for Maximum Number of Balloons.

/*
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {

  let store = {
    'b': 0,
    'a': 0,
    'l': 0,
    'o': 0,
    'n': 0
  };

  for (let i = 0; i < text.length; i++) {
    if (store[text[i]] >= 0) store[text[i]] += 1;
  }

  let total = 0;
  while (true) {
    store['b'] -= 1;
    store['a'] -= 1;
    store['l'] -= 1;
    store['l'] -= 1;
    store['o'] -= 1;
    store['o'] -= 1;
    store['n'] -= 1;

    if (store['b'] < 0) delete store['b'];
    if (store['a'] < 0) delete store['a'];
    if (store['l'] < 0) delete store['l'];
    if (store['o'] < 0) delete store['o'];
    if (store['n'] < 0) delete store['n'];

    if (Object.keys(store).length === 5) {
      total += 1;
    } else if (Object.keys(store).length < 5) {
      break;
    }
  }

  return total;
};