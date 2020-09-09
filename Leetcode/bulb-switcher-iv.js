// https://leetcode.com/problems/bulb-switcher-iv/

/*
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  // My dump idea
  // let init = "0".repeat(target.length);
  // let count = 0;
  // let i = 0;
  // while (i < target.length) {
  //   if (target[i] !== init[i]) {
  //     init = target[i].repeat(target.length);
  //     count++;
  //   }
  //   i++;
  // }
  //
  // return count;

  let init = "0";
  let count = 0;

  for (let c of target) {
    if (init != c) {
      init = c;
      count++;
    }
  }
  return count;
};
