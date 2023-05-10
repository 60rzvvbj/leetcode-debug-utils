import { TreeNode } from '.';
import { NodeValue } from '../common';
import { cloneTree } from './cloneTree';

const Empty: NodeValue = Symbol('empty') as any;

export function printTree(root: TreeNode): void {
  root = cloneTree(root);
  fillTree(root);
  const allNode: TreeNode[] = [];
  const nodeHeight = new Map<TreeNode, number>();
  const leafNode: TreeNode[] = [];
  showTreeDfs(allNode, nodeHeight, leafNode, 0, root);
  const nodeX = new Map<TreeNode, number>();
  const nodeY = new Map<TreeNode, number>();
  let maxHeight = 0;
  nodeHeight.forEach((value: number) => {
    maxHeight = Math.max(maxHeight, value);
  });
  let width = maxHeight + Math.floor(maxHeight / 2);
  const chart = new Array(maxHeight * 2 + 2);
  for (let i = 0; i < chart.length; i++) {
    chart[i] = new Array(width * (leafNode.length + 1)).fill(' ');
  }
  let x = width;
  for (let node of leafNode) {
    nodeX.set(node, x);
    x += width;
  }
  for (let y = maxHeight; y >= 0; y--) {
    allNode.forEach((node) => {
      if (nodeHeight.get(node) === y) {
        nodeY.set(node, 2 * y);
        if (node.left !== null || node.right !== null) {
          let lx = nodeX.get(node.left!)!;
          let rx = nodeX.get(node.right!)!;
          nodeX.set(node, Math.floor((lx + rx) / 2));
        }
      }
    });
  }

  for (let node of allNode) {
    if (node.val !== Empty) {
      setChar(chart, String(node.val), nodeX.get(node)!, nodeY.get(node)!);
    }
    if (node.left !== null && node.right !== null) {
      if (node.left.val !== Empty) {
        setChar(
          chart,
          '/',
          Math.floor((nodeX.get(node)! + nodeX.get(node.left)!) / 2),
          Math.floor((nodeY.get(node)! + nodeY.get(node.left)!) / 2),
        );
      }
      if (node.right.val !== Empty) {
        setChar(
          chart,
          '\\',
          Math.floor((nodeX.get(node)! + nodeX.get(node.right)!) / 2),
          Math.floor((nodeY.get(node)! + nodeY.get(node.right)!) / 2),
        );
      }
    }
  }

  console.log(chart.map((item) => item.join('')).join('\n'));
}

function showTreeDfs(
  allNode: TreeNode[],
  nodeHeight: Map<TreeNode, number>,
  leafNode: TreeNode[],
  nowHeight: number,
  node: TreeNode,
): void {
  allNode.push(node);
  nodeHeight.set(node, nowHeight);
  if (node.left === null && node.right === null) {
    leafNode.push(node);
  } else {
    showTreeDfs(allNode, nodeHeight, leafNode, nowHeight + 1, node.left!);
    showTreeDfs(allNode, nodeHeight, leafNode, nowHeight + 1, node.right!);
  }
}

function setChar(chart: string[][], str: string, x: number, y: number) {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    const c = strArr[i].split('');
    let len = c.length;
    let start = x - Math.floor(len / 2);
    let index = 0;
    for (let j = start; index < c.length; j++) {
      chart[y + i][j] = c[index++];
    }
  }
}

function fillTree(root: TreeNode): void {
  fillTreeDfs(root);
}

function fillTreeDfs(node: TreeNode): void {
  if (node.left !== null) {
    fillTreeDfs(node.left);
  }
  if (node.right !== null) {
    fillTreeDfs(node.right);
  }
  if (node.left !== null && node.right === null) {
    node.right = new TreeNode(Empty);
  }
  if (node.right !== null && node.left === null) {
    node.left = new TreeNode(Empty);
  }
}
