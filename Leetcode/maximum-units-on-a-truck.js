// https://leetcode.com/problems/maximum-units-on-a-truck/
// Runtime: 80 ms, faster than 99.11% of JavaScript online submissions for Maximum Units on a Truck.
// Memory Usage: 41.4 MB, less than 40.48% of JavaScript online submissions for Maximum Units on a Truck.

/*
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let pickedSize = 0;
  let totalUnits = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    if (pickedSize === truckSize) break;

    // The box number that we are going to pick
    // 2 cases, 1 is pick all, another is pick some cause we already reach truck size
    const boxNum =
      pickedSize + boxTypes[i][0] <= truckSize
        ? boxTypes[i][0]
        : truckSize - pickedSize;
    const boxUnits = boxTypes[i][1];

    pickedSize += boxNum;
    totalUnits += boxNum * boxUnits;
  }

  return totalUnits;
};
