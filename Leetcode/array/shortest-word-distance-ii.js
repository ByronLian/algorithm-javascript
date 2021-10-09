// https://leetcode.com/problems/shortest-word-distance-ii/

/*
 * @param {string[]} wordsDict
 */

var WordDistance = function (wordsDict) {
  this._map = new Map();

  for (let i = 0; i < wordsDict.length; i++) {
    const w = wordsDict[i];
  
    if (!this._map.has(w)) this._map.set(w, new Set());
    this._map.get(w).add(i);
  }
};

/*
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

WordDistance.prototype.shortest = function (word1, word2) {
  const map1 = this._map.get(word1);
  const map2 = this._map.get(word2);
  let min = Infinity;

  for (let word1Idx of map1) {
    for (let word2Idx of map2) {
      min = Math.min(min, Math.abs(word1Idx - word2Idx));
    }
  }
  return min;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
