// https://leetcode.com/problems/minimum-window-substring/

/*
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

 var minWindow = function (s, t) {
  const map = new Map();

  let counter = 0;
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] === undefined) {
      map[t[i]] = 1;
      counter += 1;
    } else {
      map[t[i]] += 1;
    }
  }

  let left = 0;
  let right = 0;
  let minLen = Infinity;
  let finalLeft = 0;
  let finalRight = 0;

  while (right < s.length) {
    if (map[s[right]] !== undefined) {
      map[s[right]] -= 1;
      if (map[s[right]] === 0) counter--;
    }

    right++;

    while (counter === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        finalLeft = left;
        finalRight = right;
      }

      if (map[s[left]] !== undefined) {
        map[s[left]] += 1;
        if (map[s[left]] > 0) counter++;
      }

      left++;
    }
  }

  return s.substring(finalLeft, finalRight);
};
