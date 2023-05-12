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

export function createBinaryTree(arr: NodeValue[]): TreeNode | null {
  if (arr == null) return null
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
      queue.push((node.left = new TreeNode(arr[i++])))
      if (i == arr.length) return tree
      queue.push((node.right = new TreeNode(arr[i++])))
      if (i == arr.length) return tree
    }
  }

  return null
}
