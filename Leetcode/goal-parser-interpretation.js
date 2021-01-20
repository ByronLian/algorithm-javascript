// https://leetcode.com/problems/goal-parser-interpretation/
// Runtime: 72 ms, faster than 94.49% of JavaScript online submissions for Goal Parser Interpretation.
// Memory Usage: 38.6 MB, less than 68.23% of JavaScript online submissions for Goal Parser Interpretation.

/*
 * @param {string} command
 * @return {string}
 */

var interpret = function (command) {
  let temp = "";
  let result = "";

  for (let i = 0; i < command.length; i++) {
    temp += command[i];

    switch (temp) {
      case "G":
        result += "G";
        temp = "";
        break;
      case "()":
        result += "o";
        temp = "";
        break;
      case "(al)":
        result += "al";
        temp = "";
        break;
      default:
        break;
    }
  }

  return result;
};
