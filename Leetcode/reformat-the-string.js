// https://leetcode.com/problems/reformat-the-string/
// Runtime: 84 ms, faster than 94.67% of JavaScript online submissions for Reformat The String.
// Memory Usage: 43.2 MB, less than 55.33% of JavaScript online submissions for Reformat The String.

/*
 * @param {string} s
 * @return {string}
 */

var reformat = function (s) {
  const arr = s.split("");
  const numbers = arr.filter((x) => x.charCodeAt() < 97);
  const letters = arr.filter((x) => x.charCodeAt() >= 97);

  if (Math.abs(numbers.length - letters.length) > 1) return "";

  let result = "";
  const bigger = numbers.length > letters.length ? numbers : letters;
  const smaller = numbers.length > letters.length ? letters : numbers;

  for (let i = 0; i < bigger.length; i++) {
    result += bigger[i];
    if (smaller[i] !== undefined) result += smaller[i];
  }

  return result;
};
