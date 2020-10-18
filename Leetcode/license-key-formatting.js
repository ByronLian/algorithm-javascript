// https://leetcode.com/problems/license-key-formatting/
// Runtime: 72 ms, faster than 99.17% of JavaScript online submissions for License Key Formatting.
// Memory Usage: 44.2 MB, less than 5.56% of JavaScript online submissions for License Key Formatting.

/*
 * @param {string} S
 * @param {number} K
 * @return {string}
 */

var licenseKeyFormatting = function (S, K) {
  // Get string without "-"
  const newStr = S.split("-").join("");
  let result = "";
  let count = 0;
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (count % K === 0 && count !== 0) {
      result = "-" + result;
      count = 0;
    }

    // Re-assemble string
    const tmpCode = newStr[i].charCodeAt();
    result =
      tmpCode >= 97 && tmpCode <= 122
        ? String.fromCharCode(tmpCode - 32) + result
        : newStr[i] + result;

    count++;
  }

  return result;
};
