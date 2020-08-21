// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

/*
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let indexTotal = 0;
  let charsMap = {};
  let wordMap = {};

  for (let i = 0; i < chars.length; i++) {
    if (charsMap[chars[i]]) {
      charsMap[chars[i]] += 1;
    } else {
      charsMap[chars[i]] = 1;
    }
  }

  for (let j = 0; j < words.length; j++) {
    let flag = true;
    wordMap = Object.assign({}, charsMap);

    for (let k = 0; k < words[j].length; k++) {
      if (wordMap[words[j][k]] && wordMap[words[j][k]] >= 1) {
        wordMap[words[j][k]] -= 1;
      } else {
        flag = false;
        break;
      }
    }

    if (flag === true) indexTotal += words[j].length;
  }

  return indexTotal;
};
