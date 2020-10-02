// https://leetcode.com/problems/crawler-log-folder/
// Runtime: 72 ms, faster than 97.62% of JavaScript online submissions for Crawler Log Folder.
// Memory Usage: 39.1 MB, less than 64.28% of JavaScript online submissions for Crawler Log Folder.

/*
 * @param {string[]} logs
 * @return {number}
 */

var minOperations = function (logs) {
  let currentLevel = 0;

  for (let i = 0; i < logs.length; i++) {
    switch (logs[i]) {
      case "./":
        break;
      case "../":
        if (currentLevel !== 0) currentLevel--;
        break;
      default:
        currentLevel++;
    }
  }

  return currentLevel;
};
