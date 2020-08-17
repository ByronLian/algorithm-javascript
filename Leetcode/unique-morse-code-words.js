// https://leetcode.com/problems/unique-morse-code-words/
// Runtime: 72 ms, faster than 87.80% of JavaScript online submissions for Unique Morse Code Words.
// Memory Usage: 37.7 MB, less than 43.07% of JavaScript online submissions for Unique Morse Code Words.

/*
 * @param {string[]} words
 * @return {number}
 */

var uniqueMorseRepresentations = function (words) {
  const map = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  const result = {};

  for (let i = 0; i < words.length; i++) {
    let temp = "";
    for (let j = 0; j < words[i].length; j++) {
      temp += map[words[i][j]];
    }

    if (!result[temp]) result[temp] = 1;
  }

  return Object.keys(result).length;
};

// Better solution from https://leetcode.com/problems/unique-morse-code-words/discuss/329303/JavaScript-One-Line-Solution-w-Explanation-(52-ms-beats-94)
// Set won't replace duplicate value
// return new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size