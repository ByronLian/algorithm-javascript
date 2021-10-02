// https://leetcode.com/problems/string-compression/
// Runtime: 72 ms, faster than 97.28% of JavaScript online submissions for String Compression.
// Memory Usage: 41.5 MB, less than 13.41% of JavaScript online submissions for String Compression.

/*
 * @param {character[]} chars
 * @return {number}
 */

var compress = function (chars) {
  const len = chars.length;
  let current = chars[chars.length - 1];
  let count = 0;
  let offsetPointer = 0;
  for (let i = len - 1; i >= -1; i--) {
    const target = chars[i + offsetPointer];

    if (target !== current) {
      if (count > 9) {
        const str = count.toString();
        for (let i = str.length - 1; i >= 0; i--) {
          chars.unshift(str[i].toString());
        }
        offsetPointer += str.length;
      } else if (count > 1) {
        chars.unshift(count.toString());
        offsetPointer += 1;
      }

      chars.unshift(current);
      offsetPointer += 1
      current = target;
      count = 1;
    } else {
      count += 1;
    }
  }

  // Remain
  if (count > 1) {
    const str = count.toString();
    for (let i = str.length - 1; i >= 0; i--) {
      chars.unshift(str[i].toString());
    }
  }
  chars.unshift(current);

  return chars.length - len;
};
