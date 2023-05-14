
class TreeNode {
  val: number;
  // eslint-disable-next-line no-use-before-define
  left: TreeNode | null;
  // eslint-disable-next-line no-use-before-define
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function binaryTreePaths(root: TreeNode): string[] {
  const values: number[] = [];
  const result: string[] = [];
  function helper(root: TreeNode): void {
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
