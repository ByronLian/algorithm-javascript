// https://leetcode.com/problems/destination-city/
// Runtime: 76 ms, faster than 78.37% of JavaScript online submissions for Destination City.
// Memory Usage: 37.5 MB, less than 66.36% of JavaScript online submissions for Destination City.

/*
 * @param {string[][]} paths
 * @return {string}
 */

var destCity = function (paths) {
  let destination = "";
  let currentStay = paths[0][0];

  while (destination === "") {
    let hasAnotherDestination = false;

    for (let i = 0; i < paths.length; i++) {
      if (paths[i][0] === currentStay) {
        currentStay = paths[i][1];
        hasAnotherDestination = true;
      }

      if (i === paths.length - 1 && hasAnotherDestination === false)
        destination = currentStay;
    }
  }

  return destination;
};

// Another quicker way
// use Set and filter City which has destination and return the City which has no destination
// const A = new Set(paths.map((path) => path[0]));
// return paths.filter((path) => !A.has(path[1])).pop()[1];
