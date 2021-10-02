// https://leetcode.com/problems/encode-and-decode-strings/

/*
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

var encode = function (strs) {
  let result = "";
  for (let i = 0; i < strs.length; i++) {
    result += `${strs[i].length}:${strs[i]}`;
  }
  return result;
};

/*
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */

var decode = function (s) {
  const result = [];

  let i = 0;
  let temp = "";
  let end = -1;
  while (i <= s.length) {
    if (end > 0) {
      temp += s[i];
      end--;
    } else if (end === 0) {
      result.push(temp);
      temp = "";
      end = -1;
      continue;
    } else if (end === -1) {
      if (s[i] !== ":") {
        temp += s[i];
      }
      if (s[i] === ":") {
        end = parseInt(temp, 10);
        temp = "";
      }
    }
    i++;
  }

  return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
