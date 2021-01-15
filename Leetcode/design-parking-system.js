// https://leetcode.com/problems/design-parking-system/
// Runtime: 140 ms, faster than 96.27% of JavaScript online submissions for Design Parking System.
// Memory Usage: 47 MB, less than 14.70% of JavaScript online submissions for Design Parking System.

/*
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

var ParkingSystem = function (big, medium, small) {
  this._space = [big, medium, small];
};

/*
 * @param {number} carType
 * @return {boolean}
 */

ParkingSystem.prototype.addCar = function (carType) {
  if (this._space[carType - 1] === 0) {
    return false;
  } else {
    this._space[carType - 1] -= 1;
    return true;
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
