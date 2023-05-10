import { TreeNode } from '.';

export function cloneTree(root: TreeNode): TreeNode {
  return cloneTreeDfs(root);
}

function cloneTreeDfs(node: TreeNode): TreeNode {
  let res = new TreeNode(node.val);
  if (node.left !== null) {
    res.left = cloneTreeDfs(node.left);
  }
  if (node.right !== null) {
    res.right = cloneTreeDfs(node.right);
  }
  return res;
}
