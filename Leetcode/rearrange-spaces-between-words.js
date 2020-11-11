// https://leetcode.com/problems/rearrange-spaces-between-words/
// Runtime: 68 ms, faster than 95.88% of JavaScript online submissions for Rearrange Spaces Between Words.
// Memory Usage: 38.8 MB, less than 31.87% of JavaScript online submissions for Rearrange Spaces Between Words.

/*
 * @param {string} text
 * @return {string}
 */

var reorderSpaces = function (text) {
  let textArr = [];
  let count = 0;
  let tmp = "";
  let avgSpace = 0;
  let extraSpace = 0;
  let result = "";

  // Get total space count and put word into new array
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      count++;
      if (tmp !== "") textArr.push(tmp);
      tmp = "";
    } else {
      tmp += text[i];
    }
  }
  if (tmp !== "") textArr.push(tmp);

  // Get avg space and extra space
  avgSpace = Math.floor(count / (textArr.length - 1));
  extraSpace = count % (textArr.length - 1);

  // Case that only one word
  if (textArr.length === 1 && count > 0) return textArr[0] + " ".repeat(count);

  // Other cases
  let i = 0;
  while (i < textArr.length) {
    result += textArr[i];
    if (i !== textArr.length - 1) result += " ".repeat(avgSpace);

    i++;
  }
  if (extraSpace > 0) result += " ".repeat(extraSpace);

  return result;
};
