// https://leetcode.com/problems/reveal-cards-in-increasing-order/
// Runtime: 88 ms, faster than 58.14% of JavaScript online submissions for Reveal Cards In Increasing Order.
// Memory Usage: 38.5 MB, less than 48.84% of JavaScript online submissions for Reveal Cards In Increasing Order.

/*
 * @param {number[]} deck
 * @return {number[]}
 */

var deckRevealedIncreasing = function (deck) {
  let result = [];
  const len = deck.length;
  // Sorting array
  deck.sort((a, b) => a - b);

  // Relocate elements from rule
  while (deck.length >= 1) {
    if (deck.length !== len) result.unshift(result.pop());
    result.unshift(deck.pop());
  }

  return result;
};
