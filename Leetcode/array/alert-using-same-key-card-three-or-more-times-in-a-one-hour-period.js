// https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/

/*
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */

var alertNames = function (keyName, keyTime) {
  const map = {};

  for (let i = 0; i < keyName.length; i++) {
    const newValue = parseInt(keyTime[i].split(":").join(""), 10);

    if (map[keyName[i]] === undefined) {
      map[keyName[i]] = [newValue];
    } else {
      map[keyName[i]].push(newValue);
    }
  }

  Object.keys(map).forEach((key) => {
    map[key].sort((a, b) => a - b);
  });

  let result = [];
  for (let key in map) {
    if (map[key].length < 3) continue;

    for (let j = 2; j < map[key].length; j++) {
      if (map[key][j] - map[key][j - 2] <= 100) {
        result.push(key);
        break;
      }
    }
  }

  return result.sort((a, b) => a.localeCompare(b));
};
