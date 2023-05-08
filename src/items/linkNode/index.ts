import { NodeValue } from '../common';

export class ListNode {
  val: NodeValue;
  next: ListNode | null;
  constructor(val: NodeValue, next?: ListNode | null) {
    this.val = val;
    this.next = next ?? null;
  }
}

export function createLinkedList(arr: NodeValue[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }

  let head = new ListNode(arr[0]);
  let node = head;
  for (let i = 1; i < arr.length; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }

  return head;
}

export function cloneLinkedList(listHead: ListNode | null): ListNode | null {
  if (listHead === null) {
    return null;
  }

  let head = new ListNode(listHead.val);
  let ynode = listHead;
  let node = head;

  while (ynode.next !== null) {
    node.next = new ListNode(ynode.next.val);
    ynode = ynode.next;
    node = node.next;
  }

  return head;
}

export function printLinkedList(listHead: ListNode | null): void {
  if (listHead === null) {
    console.log(null);
    return;
  }
  let res = `${listHead.val}`;
  let node: ListNode = listHead;
  while (node.next !== null) {
    node = node.next;
    res += ` -> ${node.val}`;
  }
  console.log(res);
}
