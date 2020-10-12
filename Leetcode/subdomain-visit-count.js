// https://leetcode.com/problems/subdomain-visit-count/
// Runtime: 80 ms, faster than 99.54% of JavaScript online submissions for Subdomain Visit Count.
// Memory Usage: 43.6 MB, less than 21.75% of JavaScript online submissions for Subdomain Visit Count.

/*
 * @param {string[]} cpdomains
 * @return {string[]}
 */

var subdomainVisits = function (cpdomains) {
  let map = {};

  for (let i = 0; i < cpdomains.length; i++) {
    // ["9001", "discuss.leetcode.com"]
    const tmp = cpdomains[i].split(" ");
    // ["9001"]
    const visitCount = parseInt(tmp[0]);
    // ["discuss.leetcode.com"]
    const subDomains = tmp[1].split(".");

    // "com"
    // "leetcode.com"
    // "discuss.leetcode.com"
    for (let i = 1; i <= subDomains.length; i++) {
      const currentSubDomain = subDomains
        .slice(subDomains.length - i, subDomains.length)
        .join(".");

      if (map[currentSubDomain] === undefined) {
        map[currentSubDomain] = visitCount;
      } else {
        map[currentSubDomain] += visitCount;
      }
    }
  }

  let result = [];
  Object.keys(map).forEach((item) => {
    const str = map[item] + " " + item;
    result.push(str);
  });

  return result;
};
