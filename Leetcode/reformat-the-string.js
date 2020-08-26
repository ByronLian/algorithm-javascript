// https://leetcode.com/problems/reformat-the-string/

/*
 * @param {string} s
 * @return {string}
 */

var reformat = function (s) {
  const nums = s.split("").filter((x) => x.charCodeAt() < 97);
  const letters = s.split("").filter((x) => x.charCodeAt() >= 97);

  if (Math.abs(nums.length - letters.length) > 1) return "";

  let result = "";
  let bigger = nums.length > letters.length ? nums : letters;
  let smaller = nums.length > letters.length ? letters : nums;

  while (bigger.length) {
    result += bigger.pop();
    if (smaller.length) result += smaller.pop();
  }

  return result;
};
