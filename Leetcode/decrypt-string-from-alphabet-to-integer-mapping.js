// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
// Runtime: 72 ms, faster than 68.66% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
// Memory Usage: 38.4 MB, less than 7.42% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.

/*
 * @param {string} s
 * @return {string}
 */

var freqAlphabets = function (s) {

  const mapHasHash = {
    '10#': 'j',
    '11#': 'k',
    '12#': 'l',
    '13#': 'm',
    '14#': 'n',
    '15#': 'o',
    '16#': 'p',
    '17#': 'q',
    '18#': 'r',
    '19#': 's',
    '20#': 't',
    '21#': 'u',
    '22#': 'v',
    '23#': 'w',
    '24#': 'x',
    '25#': 'y',
    '26#': 'z',
  };

  const mapHasNoHash = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
    '5': 'e',
    '6': 'f',
    '7': 'g',
    '8': 'h',
    '9': 'i',
  }

  // Replace hash first
  for (let key in mapHasHash) {
    while (s.indexOf(key) !== -1) {
      s = s.replace(key, mapHasHash[key]);
    }
    if (s.indexOf('#') === -1) break;
  }

  // Replace no hash value
  for (let i = 0; i < s.length; i++) {
    if (mapHasNoHash[s[i]]) s = s.replace(s[i], mapHasNoHash[s[i]]);
  }

  return s;
};

