//
// Runtime: 68 ms, faster than 98.90% of JavaScript online submissions for Intersection of Three Sorted Arrays.
// Memory Usage: 40.5 MB, less than 5.49% of JavaScript online submissions for Intersection of Three Sorted Arrays.

/*
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */

var arraysIntersection = function (arr1, arr2, arr3) {
  let store = {};
  let result = [];

  const storeElement = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (store[arr[i]] === undefined) {
        store[arr[i]] = 1;
      } else {
        store[arr[i]] += 1;
      }

      if(store[arr[i]] === 3) result.push(arr[i]);
    }
  };

  storeElement(arr1);
  storeElement(arr2);
  storeElement(arr3);

  return result;
};
