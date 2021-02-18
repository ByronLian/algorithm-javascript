// https://leetcode.com/problems/lru-cache/

class LRUCache {
  constructor(capacity) {
    this._map = new Map();
    this._capacity = capacity;
  }

  // JS map keep sequence when put in
  get(key) {
    if (!this._map.has(key)) return -1;

    const val = this._map.get(key);
    this._map.delete(key);
    this._map.set(key, val);

    return val;
  }

  put(key, value) {
    this._map.delete(key);
    this._map.set(key, value);

    if (this._map.size > this._capacity) {
      const firstOnDelete = this._map.keys().next().value;
      this._map.delete(firstOnDelete);
    }
  }
}
