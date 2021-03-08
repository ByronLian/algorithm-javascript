// https://leetcode.com/problems/count-items-matching-a-rule/
// Runtime: 84 ms, faster than 100.00% of JavaScript online submissions for Count Items Matching a Rule.
// Memory Usage: 42.3 MB, less than 100.00% of JavaScript online submissions for Count Items Matching a Rule. 

/*
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

var countMatches = function (items, ruleKey, ruleValue) {
  let counter = 0;

  items.forEach((item) => {
    if (getValueByKey(ruleKey, item) === ruleValue) {
      counter++;
    }
  });

  return counter;
};

const getValueByKey = (key, item) => {
  let returnValue = "";

  switch (key) {
    case "type":
      returnValue = item[0];
      break;
    case "color":
      returnValue = item[1];
      break;
    case "name":
      returnValue = item[2];
      break;
    default:
      break;
  }

  return returnValue;
};
