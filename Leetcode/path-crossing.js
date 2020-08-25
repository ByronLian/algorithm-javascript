// https://leetcode.com/problems/path-crossing/

/*
 * @param {string} path
 * @return {boolean}
 */

var isPathCrossing = function (path) {
  let map = { "0": [0] };
  let current = [0, 0];

  for (let i = 0; i < path.length; i++) {
    switch (path[i]) {
      case "N":
        current[1]++;
        break;
      case "S":
        current[1]--;
        break;
      case "E":
        current[0]++;
        break;
      case "W":
        current[0]--;
        break;
    }

    if (map[current[0]]) {
      if (map[current[0]].indexOf(current[1]) !== -1) return true;
      map[current[0]].push(current[1]);
    } else {
      map[current[0]] = [current[1]];
    }
  }

  return false;
};
