// https://leetcode.com/problems/to-lower-case/
// Runtime: 68 ms, faster than 77.29% of JavaScript online submissions for To Lower Case.
// Memory Usage: 36.9 MB, less than 5.13% of JavaScript online submissions for To Lower Case.

/*
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  const map = {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z",
  };

  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      result.push(map[str[i]]);
    } else {
      result.push(str[i]);
    }
  }

  return result.join("");
};
