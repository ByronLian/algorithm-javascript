// https://leetcode.com/problems/construct-the-rectangle/

/*
 * @param {number} area
 * @return {number[]}
 */

var constructRectangle = function (area) {
  if (area === 0) return [];

  let start = area === 1 ? 1 : Math.floor(Math.sqrt(area));
  for (let i = start; i <= area; i++) {
    if (area % i === 0 && area / i <= i) return [i, area / i];
  }

  return [];
};
