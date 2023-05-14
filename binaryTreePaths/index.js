var TreeNode = /** @class */ (function () {
  function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
  return TreeNode;
}());
function binaryTreePaths(root) {
  var values = [];
  var result = [];
  function helper(root) {
    if (root.val) {
      // will push values into value[]
      values.push(root.val);
    }
    if (root.left) {
      // traverse left and call recursive function
      helper(root.left);
    }
    if (root.right) {
      // traverse right and call recursive function
      helper(root.right);
    }
    if (!root.left && !root.right) {
      // will push the values into result[] when values of right and left are null (end of tree)
      result.push(values.join('->'));
    }
    // values will be popped the amount of times the recursive function is called while traversing
    values.pop();
  }
  helper(root);
  return result;
}
