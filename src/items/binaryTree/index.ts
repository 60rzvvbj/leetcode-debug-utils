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

let beginPoint = 0
function ownershift(arr: TreeNode[]) {
    return arr[beginPoint++]
}

export function createBinaryTree(arr: NodeValue[]): TreeNode | null {
  // todo
    
    let tree = new TreeNode(arr[0]) //创建根节点
    let queue = [tree]
    // i表示遍历到数组的第几位
    let i = 1
    // for和下面的while实现功能相同 都是遍历队列 进行左子树和右子树节点的添加
    // for (let node of queue) {
    //     queue.push(node.left = new TreeNode(arr[i++]))
    //     if (i == arr.length) return tree
    //     queue.push(node.right = new TreeNode(arr[i++]))
    //     if (i == arr.length) return tree
    // }
    while (queue.length) {
        let len = queue.length
        while (len--) {
            let node = ownershift(queue)
            queue.push(node.left = new TreeNode(arr[i++]))
            if (i == arr.length) return tree
            queue.push(node.right = new TreeNode(arr[i++]))
            if (i == arr.length) return tree
        }
    }

  return null;
}
