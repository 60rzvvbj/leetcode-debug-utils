import { NodeValue } from '../common';

export class TreeNode {
  val: NodeValue;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: NodeValue, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

export function createBinaryTree(arr: NodeValue[]): TreeNode | null {
  // todo
  return null;
}
