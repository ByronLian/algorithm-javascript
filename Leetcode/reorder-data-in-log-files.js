// https://leetcode.com/problems/reorder-data-in-log-files/

/*
 * @param {string[]} logs
 * @return {string[]}
 */

var reorderLogFiles = function (logs) {
  const isNum = (str) => /\d/.test(str);

  const letLogs = [];
  const digLogs = [];

  for (let i = 0; i < logs.length; i++) {
    isNum(logs[i].split(" ")[1])
      ? digLogs.push(logs[i])
      : letLogs.push(logs[i]);
  }

  // JS localeCompare, when a before b then yield a negative number, otherwise will be positive number
  const compare = (a, b) => {
    const n = a
      .slice(a.indexOf(" ") + 1)
      .localeCompare(b.slice(b.indexOf(" ") + 1));
    if (n !== 0) return n;
    return a.localeCompare(b);
  };

  letLogs.sort(compare);

  return [...letLogs, ...digLogs];
};
