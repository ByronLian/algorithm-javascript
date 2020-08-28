// https://leetcode.com/problems/assign-cookies/
// Runtime: 144 ms, faster than 33.19% of JavaScript online submissions for Assign Cookies.
// Memory Usage: 44.2 MB, less than 5.04% of JavaScript online submissions for Assign Cookies.

/*
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function (g, s) {
  if (s.length === 0) return 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < g.length; i++) {
    if(g[i] > s[0]) break;

    for (let j = 0; j < s.length; j++) {
      if (s[j] >= g[i]) {
        s = s.slice(j + 1);
        count++;
        break;
      }
    }
  }

  return count;
};
