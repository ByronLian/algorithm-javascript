// https://leetcode.com/problems/flood-fill/
// Solution from: https://leetcode.com/problems/flood-fill/discuss/626668/Javascript-and-C%2B%2B-solutions

/*
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var floodFill = function (image, sr, sc, newColor) {
  let M = image.length,
    N = M ? image[0].length : 0;
  let pre = image[sr][sc];
  let seen = new Set();

  let scan = (i = sr, j = sc) => {
    if (
      i < 0 ||
      i == M ||
      j < 0 ||
      j == N ||
      image[i][j] != pre ||
      seen.has(`${i},${j}`)
    )
      return;
    
    seen.add(`${i},${j}`);
    image[i][j] = newColor;

    for (let dir of [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]) {
      let u = i + dir[0],
        v = j + dir[1];
      scan(u, v);
    }
  
    return image;
  };

  return scan();
};
