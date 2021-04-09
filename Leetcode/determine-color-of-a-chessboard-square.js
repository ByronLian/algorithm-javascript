// https://leetcode.com/problems/determine-color-of-a-chessboard-square/
// Runtime: 72 ms, faster than 94.55% of JavaScript online submissions for Determine Color of a Chessboard Square.
// Memory Usage: 38.6 MB, less than 44.55% of JavaScript online submissions for Determine Color of a Chessboard Square.

/*
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const defaultMap = {
    a: "b",
    b: "w",
    c: "b",
    d: "w",
    e: "b",
    f: "w",
    g: "b",
    h: "w",
    1: "b",
    2: "w",
    3: "b",
    4: "w",
    5: "b",
    6: "w",
    7: "b",
    8: "w",
  };

  const [letter, num] = coordinates.split("");
  return defaultMap[letter] === defaultMap[num] ? false : true;
};
