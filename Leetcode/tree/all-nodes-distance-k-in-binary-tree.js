// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
// Nice solution 1: https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/discuss/843575/Javascript-DFS
// Nice solution 2: https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/discuss/679497/JavaScript-Clean-BFS-Solution

var distanceK = function (root, target, K) {
  if (!root) return [];
  const node = findTarget(root, null, target);
  const result = [];
  findResult(node, K, result);
  return result;
};

const findTarget = (root, parent, target) => {
  if (!root) return null;
  root.parent = parent;
  if (root === target) {
    return root;
  }
  return (
    findTarget(root.left, root, target) || findTarget(root.right, root, target)
  );
};

const findResult = (root, k, result) => {
  if (!root || root.visited) return result;
  if (k === 0) {
    result.push(root.val);
    return result;
  }
  root.visited = true;
  findResult(root.left, k - 1, result);
  findResult(root.right, k - 1, result);
  findResult(root.parent, k - 1, result);
  return result;
};
