import { NodeValue } from '../common'

export class TreeNode {
  val: NodeValue
  left: TreeNode | null
  right: TreeNode | null

  constructor(val: NodeValue, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val
    this.left = left ?? null
    this.right = right ?? null
  }
}

export function createBinaryTree(arr: (NodeValue | null)[]): TreeNode | null {
  if (arr[0] == null) return null
  let beginPoint = 0
  function ownershift(arr: TreeNode[]) {
    return arr[beginPoint++]
  }
  let tree = new TreeNode(arr[0]) //创建根节点
  let queue = [tree]
  // i表示遍历到数组的第几位
  let i = 1
  while (queue.length) {
    let len = queue.length
    while (len--) {
      let node = ownershift(queue)
      let leftnode = arr[i++]
      if (leftnode != null) {
        queue.push((node.left = new TreeNode(leftnode)))
      } else {
        node.left = null
      }

      if (i == arr.length) return tree
      let rightnode = arr[i++]
      if (rightnode != null) {
        queue.push((node.right = new TreeNode(rightnode)))
      } else {
        node.right = null
      }
      if (i == arr.length) return tree
    }
  }
  return null
}
