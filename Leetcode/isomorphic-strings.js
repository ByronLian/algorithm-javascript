// https://leetcode.com/problems/merge-two-sorted-lists/
// Runtime: 88 ms, faster than 35.29% of JavaScript online submissions for Isomorphic Strings.

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
  let sStorage = {};
  let tStorage = {};
  const len = s.length;

  // Solution:
  // This idea is use 2 objects to save element with it's position as value
  // e.g 
  // s: "ab"
  // t: "aa"

  // loop 1: both s[0] and t[0] not exist in their storage, sStorage[a] = 0, tStorage[a] = 0
  // loop 2: s[1] exist in sStorage but t[1] not in tStorage so return false
  for (let i = 0; i < len; i++) {
    if (typeof sStorage[s[i]] === "undefined" && typeof tStorage[t[i]] === "undefined") {
      sStorage[s[i]] = i;
      tStorage[t[i]] = i;

    } else if (typeof sStorage[s[i]] !== "undefined" && typeof tStorage[t[i]] !== "undefined") {
      if (sStorage[s[i]] !== tStorage[t[i]]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};